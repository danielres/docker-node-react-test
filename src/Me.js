import React, { Component } from 'react';
import styled from 'styled-components';

import PageTitle from './shared/PageTitle';
import Entry from './shared/Entry';

const entries = [
  { id: 1, name: "Name"},
  { id: 2, name: "Email"},
  { id: 3, name: "Phone"},
  { id: 4, name: "Member since"},
  { id: 5, name: "Inviter"},
  { id: 6, name: "FB profile (link)"},
  { id: 7, name: "Intro"},
  { id: 8, name: "Inviter intro"},
];

const Wrapper = styled.section`
`;

class Me extends Component {
  render() {
    return (
      <Wrapper>
        <PageTitle>Me</PageTitle>

        <div className="entries">
          {entries.map((entry) =>
            <Entry key={entry.id}>
              {entry.name}
            </Entry>
          )}
        </div>
      </Wrapper>
    );
  }
}

export default Me;
