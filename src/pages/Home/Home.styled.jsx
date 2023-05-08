import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 30px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
  background-color: #dedede;
`;

export const PageTitle = styled.h1`
  text-align: center;
  padding: 20px;
`;

export const MoviesPopList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 0;
  padding-bottom: 35px;
`;

export const MoviesPopItem = styled.li`
border: 1px solid black;
border-radius: 3%;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
`;

export const MoviesPopItemImg = styled.img`
  width: 270px;
`;

export const MoviesPopItemPrg = styled.p`
    height: 50px;
    width: 270px;
    color: #212121;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
}`;