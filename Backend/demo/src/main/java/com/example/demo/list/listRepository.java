package com.example.demo.list;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository
        extends JpaRepository<ListModel,Integer>
{

}
