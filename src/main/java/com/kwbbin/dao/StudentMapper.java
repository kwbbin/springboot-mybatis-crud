package com.kwbbin.dao;

import com.kwbbin.bean.Student;
import org.springframework.stereotype.Repository;

//@Mapper
@Repository
public interface StudentMapper {
//    @Delete("delete from student where id=35")
    public void deleteStudent(int id);

    public Student getStudent(int id);

    public void updateStudent(Student student);

    public void addStudent(Student student);
}