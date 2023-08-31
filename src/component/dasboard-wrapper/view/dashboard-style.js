import styled from "styled-components";

const DashboardWrapperStyled = styled.div`
height: 100vh;
width: 100%;
background-color: var(--gray-100);

  #top-navbar{
    width: 100%;
    height: 42px;
    padding: 12px 0;
    background: var(--white);

    #top-navbar-center{
        width: 97%;
        margin: auto;
        display: flex;
        justify-content: space-between;

        #logo{
            display: flex;
            align-items: center;

            #logo-text{
                font-size: 32px;
                margin-left: 16px;
                font-family: orelo;
            }
            img{
                height: 36px;
            }
        }

        #notification, #top-navbar-right, #profile{
            display:flex;
            align-items:center;
        }

        #top-navbar-right{
            .icon{
                font-size: 24px;
            }

            #profile{
                cursor: pointer;
                margin-left: 24px;
                #drop-down-icon{
                    font-size:14px;
                }

                p{
                    margin: 0 8px 0 12px;
                }
            }
        }
    }
  }

  #side-menu-and-dashboard-body{
    display:flex;
    height: calc(100% - 66px);

    #side-menu{
        height: calc(100%-64px);
        width: 15%;
        background-color: var(--white);
        margin:16px;
        padding: 8px 16px;
        border-radius:14px;
        .menu{
            display: flex;
            align-items: center;
            margin: 8px 0;
            padding: 8px 14px;
            border-radius: 4px;
            h3{
                font-weight: 500;
                margin-left: 16px;
            }
            .icon{
                font-size:20px;

            }
        }
        .menu-selected{
            background-color: var(--primary-50);
            color: var(--primary-500);
            .icon{
                color: inherit;
            }
        }

    }

    #dashboard-body{
        width: 85%;
        padding: 16px 32px;
    }
  }
`

export default DashboardWrapperStyled