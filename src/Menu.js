import React, { Component } from 'react';
import styled from 'styled-components';

const entries = [
  { id: 1, name: "Home"},
  { id: 2, name: "Something"},
];

const Wrapper = styled.section`
  background: #000;
  color: #fff;
`;

const Entry = styled.div`
  padding: 20px;
  border-bottom: 1px solid #aaa;
  &:last-child {
    border-bottom: 0;
  }
`;

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        {entries.map((entry) =>
          <Entry key={entry.id}>
            {entry.name}
          </Entry>
        )}
      </Wrapper>
    );
  }
}

export default Menu;