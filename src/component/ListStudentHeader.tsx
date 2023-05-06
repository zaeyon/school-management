import React from "react";
import styled from "styled-components";
import SearchIconPNG from "../assets/icons/search_icon.png";

const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0.5rem;
  background-color: white;
  height: 26.5vh;
  width: 83.1vw;
  display: flex;
  flex-direction: column;
`;
const StudentArea = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

const Student = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f4f4f;
`;

const Button = styled.div`
  margin-right: 30px;
`;

const Export = styled.button`
  padding: 12px 14px 12px 14px;
  border: none;
  background: none;
  font-size: 14px;
  color: #2d88d4;
  font-weight: 600;
`;

const Add = styled.button`
  padding: 12px 14px;
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  background-color: #509cdb;
  border: none;
  color: white;
  border-radius: 4px;
`;

const FilterSearch = styled.div`
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Filter = styled.select`
  color: #c3c3c3;
  font-size: 14px;
  font-weight: 500;
  padding: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const SearchArea = styled.div`
  display: flex;
`;

const Search = styled.input`
  flex: 1;
  font-family: "KumbhSans-SemiBold";
  font-weight: 500;
  font-size: 14px;
  color: #8a8a8a;
  background-color: #fcfafa;
  border: none;
  padding: 16px;

  &:focus {
    outline: none;
  }
`;

const SearchInput = styled.div`
  margin-left: 30px;
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #fcfafa;
  align-items: center;
  padding-left: 16px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Category = styled.div`
  display: flex;
  background-color: white;
  padding-top: 16px;
  padding-left: 47px;
  width: 60vw;
`;

const Item = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 700;
  background-color: white;
`;

interface props {
  onClickAddStudentButton: () => void;
}

const ListStudentHeader = ({ onClickAddStudentButton }: props) => {
  return (
    <Container>
      <StudentArea>
        <Student>Students</Student>
        <Add onClick={onClickAddStudentButton}>Add Student</Add>
      </StudentArea>

      <FilterSearch>
        <Filter>
          <Option key={0} value={"filter"} disabled hidden>
            Add filter
          </Option>
          <Option key={1} value={"name"}>
            name
          </Option>
          <Option key={2} value={"class"}>
            class
          </Option>
        </Filter>
        <SearchInput>
          <SearchIcon src={SearchIconPNG} />
          <Search placeholder="Search for a student by name or email"></Search>
        </SearchInput>
      </FilterSearch>

      <Category>
        <Item style={{ flex: 1.5 }}>Name</Item>
        <Item style={{ flex: 1 }}>Student ID</Item>
        <Item style={{ flex: 1.5 }}>Email address</Item>
        <Item style={{ flex: 1 }}>Class</Item>
        <Item style={{ flex: 1 }}>Gender</Item>
      </Category>
    </Container>
  );
};

export default ListStudentHeader;