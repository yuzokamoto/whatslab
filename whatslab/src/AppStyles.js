import styled from 'styled-components';

const Header = styled.header`
    background: #3B3B3B;
    width: 100%;
    max-width: 600px;
    height: 8vh;
    display: flex;
    position: fixed;
    top: 0;
    margin: 0 auto;
    overflow: hidden;
    > div {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        > img {
            width: 100%;
            height: auto;
            max-width: 6vh;
            display: block;
            border-radius: 50%;
        }

        > h1 {
            color: #FFF;
            display: inline-block;
            margin: 0 2rem;
        }
    }
`

const Main = styled.main`
    width: 100%;
    height: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    overflow: auto;
    padding: 6rem 0;
    > div {
        margin: 1.5rem 4rem;
        > div {
            display: inline-block;
            background: #FFF;
            padding: 1rem 1.5rem;
            border-radius: 7%;
            > h1 {
                margin-bottom: .7rem;
            }
        }
        > div.user {
            background: #DCF8C6;
        }
    }
`

const Footer = styled.footer`
    background: #3B3B3B;
    width: 100%;
    max-width: 600px;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    overflow: hidden;
    > div {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        > * {
            background: #FFF;
            width: 100%;
            height: 70%;
            margin: 1rem;
            border-radius: 10px;
            border: none;
        }
        > select {
            flex: 15;
            padding-left: 1rem;
        }
        > input {
            flex: 69;
            padding-left: 1.5rem;
        }
        > button {
            flex: 16;
            font-weight: bold;
        }
    }
`

export { Header, Main, Footer };