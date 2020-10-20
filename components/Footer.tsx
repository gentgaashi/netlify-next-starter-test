import styled from 'styled-components';

const Sfooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Simg = styled.img`
  height: 1em;
  margin: 5px;
`;

export default function Footer() {
  return (
    <>
      <Sfooter>
        Made with{' '}
        <Simg src="/netliheart.svg" alt="Netlify Logo" /> for
        you
      </Sfooter>
    </>
  )
}
