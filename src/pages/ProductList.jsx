import React, { useState } from "react";
import { useLocation } from "react-router";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width:"0px 20px", display: "flex", flexDirection:"column" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight:"0px" })};
`;

const Select = styled.select`
    padding:10px;
    margin-right: 20px;
    ${mobile({ margin:"10px 0px" })};
`;
const Options = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat =  location.pathname.split("/")[2];

  const [filters,setFilters] = useState({});
  const [sort,setSort]= useState("newest");
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Options disabled >
              Color
            </Options>
            <Options>Black</Options>
            <Options>White</Options>
            <Options>Red</Options>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Options disabled >
              Size
            </Options>
            <Options>XL</Options>
            <Options>L</Options>
            <Options>M</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Options value="newest">Newest</Options>
            <Options value="asc">Price (asc)</Options>
            <Options value="des">Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
