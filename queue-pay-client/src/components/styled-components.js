import styled from 'styled-components';

export const NavDiv = styled.div`
display: flex;
min-width: 1200px ;
width: auto;
justify-content: space-between;
padding: 10px 35px;

.services{
    display: flex;
    justify-content: space-around;
    min-width: 40%;
    width: auto;
    
}
.user{
    display: flex;
    justify-content: space-around;
    min-width: 20%;
    width: auto;
}

li{
    list-style:none;
    position: relative;
    z-index: 1
}

li a {
    font-size: 16px;
    color: #19191a;
    margin-right: 42px;
    font-weight: 500;
    position: relative;
    
}

.selected{
        border-bottom: 1.5px solid tomato;
}

.register{
    background-color: tomato;
    border:none;
    border-radius: 5px;
    color: #ffffff;
    height: 1.5rem;
}

a{
    text-decoration: none;
    background-color: transparent;
}
`;

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    // justify-content: space-around;
    background-color: #fffff;
    height: 100vh;
    .signin{
        padding-top:3%;
        display: flex;
        justify-content: space-around;
        background-color: #e6e6e6;
        width: 30%;
        height: 30%;
        text-align: center;
        margin: 0 auto;
        flex-direction: column;
        border-radius: 5px;
    }

    .login100-form-title {
        display: block;
        font-family: Poppins-Bold;
        font-size: 39px;
        color: #333333;
        line-height: 1.2;
        text-align: center;
      }
      
    .input-field{
        width: 80%;
        margin: 0 auto;
        
    }
    .input{
        margin: 0 auto;
        padding: 0;
        width: 100%;
        height: 50%;
    }

    .submit-form{
        margin: 0 auto;
        width: 30%;
        height: 100%;
    }
`;