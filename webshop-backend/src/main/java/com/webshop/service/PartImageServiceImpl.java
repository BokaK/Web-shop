package com.webshop.service;

import com.webshop.model.PartImage;
import com.webshop.persistence.PartImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PartImageServiceImpl implements PartImageService {

    //TODO
    private String URL_PATTERN = "C:/Users/user/Desktop/B/web-shop/images/";
    //private String URL_PATTERN = "C:/opt/tomcat/lib/Tires-Project/images/";

    public final PartImageRepository partImageRepository;

    @Override
    public List<PartImage> findAll() {
        return (List<PartImage>) partImageRepository.findAll();
    }

    @Override
    public Optional<PartImage> findById(Long id) {
        return partImageRepository.findById(id);
    }

    @Override
    public PartImage insert(PartImage entity) {
        return partImageRepository.save(entity);
    }

    @Override
    public PartImage update(Long id, PartImage entity) {
        return partImageRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {

        Optional<PartImage> tireImage = partImageRepository.findById(id);
        if(tireImage.get().getImageUrl() != null)
        {
            File f = new File(tireImage.get().getImageUrl());
            f.delete();
        }
        partImageRepository.deleteById(id);
    }


    @Override
    public String savePicture(MultipartFile file) {
        String destLocation;
        if(file.isEmpty())
        {
            return null;
        }

        try{
            if (!new File(URL_PATTERN). exists()) {
                new File(URL_PATTERN).mkdirs( );
            }

            String orgName = file.getOriginalFilename();
            String ext = orgName.split("\\.")[1];

            String newNamePart1 = UUID.randomUUID().toString();
            String newNamePart2 = UUID.randomUUID().toString();
            String newName = String.format("%s-%s.%s", newNamePart1, newNamePart2, ext);
            destLocation = String.format(URL_PATTERN+newName);

            File dest = new File(destLocation);
            file.transferTo(dest);

        }
        catch (Exception e) {
            e.printStackTrace();
            return e.getMessage();
        }

        return destLocation;
    }

    @Override
    public PartImage getByPartId(Long id) {
        return partImageRepository.findByPartId(id);
    }
}
