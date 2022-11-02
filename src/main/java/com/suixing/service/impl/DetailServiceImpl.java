package com.suixing.service.impl;

import com.suixing.commons.ServerResponse;
import com.suixing.entity.Car;
import com.suixing.mapper.CarMapper;
import com.suixing.service.IDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailServiceImpl implements IDetailService {

    @Autowired
    private CarMapper carMapper;


    @Override
    public ServerResponse getDetails(Integer carId) {
        Car car = carMapper.selectByCarId(carId);
        if (car != null)
            return ServerResponse.success("查询成功",car);
        return ServerResponse.fail("查询失败",null);
    }

    @Override
    public Car getCarById(Integer carId) {
        return carMapper.selectByCarId(carId);
    }

    @Override
    public ServerResponse getCommentsByCarId(Integer carId, Integer pageNum) {
        return null;
    }
}
