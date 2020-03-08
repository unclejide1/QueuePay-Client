import styled from 'styled-components';

export const NavDiv = styled.div`
display: flex;
min-width: 1200px ;
width: auto;
justify-content: space-between;
padding: 10px 35px;
position: sticky;
top: 0;
left: 0;
box-shadow: 0 3px 13px rgba(0,0,0, .2);

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
    color: #19191a;
}
`;

export const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
width: 100%;
height: 83vh;

.username{
    display: flex;
    justify-items: left;
}

input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 100%;
    background-color: tomato;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: tomato;
  }
  
  div {
    border-radius: 5px;
   
    padding: 20px;
  }

  a{
    color: tomato;
    font-size: .8rem;
  }

  .util{
      text-decoration: none;
  }
  .error{
    background: #FFC199; /*Change background color*/
    border-left: 9px solid #FF6600; /*Change left border color*/
    color: #2c3e50;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }

  .close{
    height: 60%;
    cursor: pointer;
  }
`;

export const RegisterDiv = styled.div`
display: flex;
height: 100vh;
min-width: 80px ;
width: 60%;
margin: 0 auto;
justify-content: space-between;

.error{
  background: #FFC199; /*Change background color*/
	border-left: 9px solid #FF6600; /*Change left border color*/
  color: #2c3e50;
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;
}

.success{
  background: 	#00FF7F; /*Change background color*/
	border-left: 9px solid #228B22; /*Change left border color*/
  color: #2c3e50;
  font-size: 0.7rem;
  margin-left: 4px;
  justify-content: space-between;
}
.close{
  height: 60%;
  cursor: pointer;
}

.introduction{
  width: 45%;
  padding: 5%;
  
}
.create{
  width: auto;
  text-align: left;
}

.business-summary{
  width: auto;
  text-align: justify;
}

.form-container{
  display:flex;
  height: 50%;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  align-items: center;
  width: 45%;
  padding: 5%;

}

.signup-form{
  width: 70%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=email], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: tomato;
  color: white;
  padding: 10px 10px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.registered{
  text-align: center;
  width: auto;
}

.util{
  text-decoration: none;
}

a{
  color: tomato;
  font-size: .9rem;
}

`;

export const DashboardDiv = styled.div`
display: flex;
height: 100vh;
width: 100%;
.profile{
  width: 15%;
  border-right: 2px solid #f37b65;
}

.pages{
  // height: 100vh;
  // background-color: red;
  width: 85%;
   overflow-y: scroll;
}


.share{
  height: 20%;
}
`


export const DashboardLink = styled.div`
color: white;

ul li{
  margin-bottom: 10px;
  list-style: none;
}

.links{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  // padding-left: 10px;
}
.link-head{
  height: 15%;
  border-radius: 5px;
  margin: 5%;
  text-align: center;
  background-color: #f37b65;
  // border-radius: 5px;
  color: #ffffff;
  text-align: left;
}

h4{
  font-weight: lighter;
  padding-left: 1rem;
}

li{
  height: 10%;
}

a{
  text-decoration: none;
}


a:hover{
  color: #f37b65;
  padding: 10px;
}

.link-body{
  display: flex;
  height: 85%;
  margin-top: 3%;
  background-color: white;
  width: 95%;
}
`
export const UpdateProfileDiv = styled.div`
text-align: left;
height: auto;
.update-form{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
}

input[type=file], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 20%;
  background-color: tomato;
  color: #ffffff;
  padding: 10px 10px;
  margin: 8px 0;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label{
  text-align: left;
  width: 100%;
}`

export const DashboardHeaderDiv = styled.div`
display: flex;
justify-content: space-between;
height: 4rem;
position: sticky;
top: 0;
left: 0;
box-shadow: 0 3px 13px rgba(0,0,0, .2);
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 6px;

.register{
  background-color: tomato;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
}
.name{
  margin-left: 20px;
}
.name h2{
  font-weight: lighter;
}

`;

export const TransactionDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  
table{
    width: 100%;
    margin-top: 7%;
  }

  .transactions h3{
    margin-left: 38%;
  }
  table tr{
    text-align: center;
  }
`;




export const PieDiv = styled.div`
width: 2000px
height: 3000px
`;

export const HomeDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: calc(100vh - 10rem);


.piechart{
height: 90%;
width: 65%;
text-align: center;
}

.details{
  height: 90%;
  width: 35%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 140px;
}

.value{
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%) !important;
  width: 55%;
  border: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: center;
align-items: center;
}

.transact{
  height: 19%;
  background-image: linear-gradient(to top, #0ba368 0%, #3cba92 100%) !important;
}
.bal {
  height: 19%;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important;
}

.val {
  height: 19%;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%) !important;
}
`


export const OTPDiv = styled.div`
font-family: Lato;
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  color: #333;

 #dialog {
  border: solid 1px #ccc;
  margin: 10px auto;
  padding: 20px 30px;
  display: inline-block;
  box-shadow: 0 0 4px #ccc;
  background-color: #faf8f8;
  overflow: hidden;
  position: relative;
  max-width: 450px;
}
 #dialog h3 {
  margin: 0 0 10px;
  padding: 0;
  line-height: 1.25;
}
 #dialog span {
  font-size: 90%;
}
 #dialog #form {
  width: 100%;
  margin: 25px auto 0;
}
 #dialog #form input {
  margin: 0 5px;
  text-align: center;
  line-height: 40px;
  font-size: 50px;
  border: solid 1px #ccc;
  box-shadow: 0 0 5px #ccc inset;
  outline: none;
  width: 10%;
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
}
 #dialog #form input:focus {
  border-color: tomato;
  box-shadow: 0 0 5px tomato inset;
}
 #dialog #form input::selection {
  background: transparent;
}
 #dialog #form button {
  margin: 30px 0 50px;
  width: 60%;
  padding: 6px;
  background-color: tomato;
  border: none;
  text-transform: uppercase;
}
 #dialog button.close {
  border: solid 2px;
  border-radius: 30px;
  line-height: 19px;
  font-size: 120%;
  width: 22px;
  position: absolute;
  right: 5px;
  top: 5px;
}
 #dialog div {
  position: relative;
  z-index: 1;
}
 #dialog img {
  position: absolute;
  bottom: -70px;
  right: -63px;
}
`

export const VerifyDiv = styled.div`
.verify{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  flex-direction: column;
}
.link{
  text-decoration: none;
  color: #f37b65;
  padding: 5px;
}


a:hover{
  color: #f37b65;
  
}
`

export const CheckoutDiv = styled.div`
.panel-title {display: inline;font-weight: bold;}
.checkbox.pull-right { margin: 0; }
.pl-ziro { padding-left: 0px; }
`;

