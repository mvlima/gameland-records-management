import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
    font-family: 'Roboto', sans-serif;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;

            .logoImg:hover{
                transform: scale(1.1);
                animation: shake 2s;
                animation-iteration-count: infinite;
            }

            @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
            }

            .brandName{
                font-weight: bold;
                font-size: 20px;
                padding: 10px;
                text-decoration: none;
            }

        }

        .logo:visited{
            color: #000;
        }

        .cartArea{
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                padding: 8px;
                margin: 5px;
                border: none;
                outline: 0;
                color: #ddd;
                background-color: #000;
                text-align: center;
                cursor: pointer;
            }

            button:hover{
                opacity: 0.7;
                transform: scale(1.01);
            }

            .cartItems{
                background-color: #009090;
                color: #ddd;
                width: 20px;
                padding: 10px;
                border-radius: 50%;
                text-align: center;
                font-weight: bold;
                font-size: 1.2rem;
                line-height: 20px;
                margin-left: 20px;
            }

            img{
                cursor: pointer;
            }

            img:hover{
                transform: scale(1.1);
            }
        }
    }

    section {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 40px;
        margin-top: 20px;

        .product-content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            height: 380px;
            width: 250px;
            background: #ddd;
            margin-left: auto;
            margin-right: auto;

            button {
                border: none;
                outline: 0;
                padding: 12px;
                color: #ddd;
                background-color: #000;
                text-align: center;
                cursor: pointer;
                width: 100%;
                font-size: 18px;
                }

            button:hover {
                opacity: 0.7;
            }
        }

        .product-content:hover{
            transform: scale(1.025);
            box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
        }
    }
`