package com.kwbbin.controller;

import com.kwbbin.bean.Student;
import com.kwbbin.dao.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorld {

    @Autowired
    StudentMapper dao;

    @RequestMapping("/helloWorld")
    public String helloWorld(){
        try {
            dao.deleteStudent(33);
        }catch (Exception e){
            System.out.println("该主键不存在");
        }

        return "index";
    }

    @RequestMapping("/getStudent")
    @ResponseBody
    public Student getStudent(String id){
        int num=-1;
        if(id!=null&&id!=""){
            num=Integer.parseInt(id);
        }

        if(num!=-1){
            return dao.getStudent(num);
        }else{
            return null;
        }

    }

    @RequestMapping("/deleteStudent")
    @ResponseBody
    public String deleteStudent(String id){
        int num=-1;
        System.out.println("id= "+id);
        if(id!=null&&id!=""){
            num=Integer.parseInt(id);
        }

        if(num!=-1){
            dao.deleteStudent(num);
            return "success";
        }else{
            return null;
        }
    }

    @RequestMapping("/updateStudent")
    @ResponseBody
    public Student updateStudent(String id,String name,String sex){
        int num=-1;
        if(id!=null&&id!=""){
            num=Integer.parseInt(id);
        }

        Student student=new Student(num,name,sex);

        dao.updateStudent(student);
        return dao.getStudent(num);
    }


    @RequestMapping("/addStudent")
    @ResponseBody
    public Student addStudent(String name,String sex){

        Student student=new Student(name,sex);
        dao.addStudent(student);
        return student;
    }

    @RequestMapping(value = {"/",""})
    public String defaultView(){
        return "index";
    }



}
