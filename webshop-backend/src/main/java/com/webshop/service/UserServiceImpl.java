package com.webshop.service;

import com.webshop.model.UserObject;
import com.webshop.model.enums.UserType;
import com.webshop.persistence.ContactInfoRepository;
import com.webshop.persistence.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ContactInfoRepository contactInfoRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Override
    public List<UserObject> getAllUsers() {
        return (List<UserObject>) userRepository.findAll();
    }

    @Override
    public void saveUser(UserObject user) {
        contactInfoRepository.save(user.getContactInfo());
        String password = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(password);
        user.setType(UserType.ROLE_USER);
        user.setEnabled(true);
        userRepository.save(user);
    }

    @Override
    public void updateUser(UserObject user) {
        contactInfoRepository.save(user.getContactInfo());
        userRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(Long.valueOf(id));
    }
}
