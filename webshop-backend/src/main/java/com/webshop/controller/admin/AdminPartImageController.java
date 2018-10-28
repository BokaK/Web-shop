package com.webshop.controller.admin;

import com.webshop.model.Part;
import com.webshop.model.PartImage;
import com.webshop.service.PartImageService;
import com.webshop.service.PartService;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping(value = "/admin/partImage")
@AllArgsConstructor
public class AdminPartImageController {

    private final PartImageService partImageSevice;
    private final PartService partSevice;

    @RequestMapping(value="/",  method = RequestMethod.POST)
    public void insert(MultipartHttpServletRequest request, HttpServletResponse response) {

        Iterator<String> itr=request.getFileNames();
        MultipartFile file=request.getFile(itr.next());

        Long id = Long.valueOf(request.getParameter("part"));
        Part part = partSevice.findById(id);
        PartImage pom = partImageSevice.getByPartId(part.getId());
        if (pom != null)
        {
            partImageSevice.deleteById(pom.getId());
        }
        String url = partImageSevice.savePicture(file);

        PartImage partImage = new PartImage();
        partImage.setImageUrl(url);
        partImage.setPart(part);

        partImageSevice.insert(partImage);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable Long id, @RequestBody PartImage partImage) {
        partImageSevice.update(id, partImage);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<PartImage> getAll() {
        return partImageSevice.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public PartImage getById(@PathVariable Long id) {
        return partImageSevice.findById(id).get();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable Long id) {
        partImageSevice.deleteById(id);
    }


    @RequestMapping(value = "/part/{id}", method = RequestMethod.GET)
    @ResponseBody
    public void getByPartId(@PathVariable Long id, HttpServletResponse response) throws IOException, SQLException {
        PartImage partImage = partImageSevice.getByPartId(id);
        InputStream in = null;
        OutputStream out = null;

        File file = new File(partImage.getImageUrl());
        String contentDisposition = String.format("inline;filename=\"%s\"",
                file.getName() + "?partId=" + id);
        byte fileContent[] = new byte[(int)file.length()];

        try {

            in = new FileInputStream(file);
            out = response.getOutputStream();


            in.read(fileContent);
            ByteArrayInputStream bin = new ByteArrayInputStream(fileContent);

            response.setHeader("Content-Disposition", contentDisposition);
            response.setContentType(Files.probeContentType(file.toPath()));
            response.setContentLength((int) file.length());

            IOUtils.copy(bin, out);

        }
        catch (IOException e) {

        }
        finally {
            if(in!=null) {
                in.close();
            }
            if(out!=null)
            {
                out.flush();
                out.close();
            }
        }

    }
}
