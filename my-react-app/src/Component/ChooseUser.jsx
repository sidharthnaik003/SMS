import React from 'react';
import { ChooseUserContainer, UserSection, Title, Button } from '../styles/ChooseUserStyles'; // Import styles
import { Link } from 'react-router-dom';
import './ChooseUser.css';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Link to="/admin-signIn">
          <Button>Login as Admin</Button>
        </Link>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Link to="/student-login"> {/* Updated link to point to StudentLogin page */}
          <Button>Login as Student</Button>
        </Link>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Link to="/teacher-signIn">
          <Button>Login as Teacher</Button>
        </Link>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
