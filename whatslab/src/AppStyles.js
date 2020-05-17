import styled from 'styled-components';

const Header = styled.header`
    background: #3B3B3B;
    width: 100%;
    max-width: 30vw;
    min-width: 320px;
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
        padding: 0 1.5rem;
        > img {
            width: 100%;
            height: auto;
            max-width: 5.5vh;
            display: block;
            border-radius: 50%;
        }
        > h1 {
            color: #FFF;
            display: inline-block;
            margin: 0 1.5rem;
        }
        > div {
            height: 100%;
            margin-left: auto;
            display: flex;
            align-items: center;
            > * {
                width: 100%;
                height: 50%;
                border: none;
            }
            > input {
                flex: 5;
                padding-left: .7rem;
                margin-right: 1rem;
                border-radius: 5px;
            }
            > button {
                flex: 1;
                border: none;
                border-radius: 50%;
            }
        }
    }
`

const Main = styled.main`
    width: 100%;
    height: 100%;
    max-width: 30vw;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 6rem 0;
    > div {
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin: 1.5rem 2.5rem;
        > div {
            display: flex;
            align-items: center;
            margin-top: 1.5rem;
            > span {
                background: #FFF;
                padding: 1rem 1.5rem;
                border-radius: 7%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;
                > h1 {
                    margin-bottom: .7rem;
                }
            }
            > #user {
                background: #DCF8C6;
                margin-left: auto;
            }
        
        }
    }
`

const Footer = styled.footer`
    background: #3B3B3B;
    width: 100%;
    max-width: 30vw;
    min-width: 320px;
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
            margin: .7rem;
            border-radius: 10px;
            border: none;
        }
        > select {
            flex: 15;
            padding-left: .7rem;
        }
        > input {
            flex: 69;
            padding-left: 1.2rem;
        }
        > button {
            flex: 16;
            font-weight: bold;
        }
    }
`

export { Header, Main, Footer };