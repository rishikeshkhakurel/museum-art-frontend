import React from 'react'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const LoadingStyle = styled.div`
    z-index: 99;
    position: absolute;
    background-color: #fff;
    height: 600px;
    width: 100%;
    opacity: 0.6;
  .loading{
    display:flex;
    height: 100%;
    align-items: center;   
    justify-content: center;
  }
`
function Loading() {
  const loading = useSelector((state) => state.loading.loadingStatus)
  if (loading) {
    return (
      <LoadingStyle>
        <div className='loading'>
          <ReactLoading type='spinningBubbles' color='#000' height={100} width={100} />
        </div>
      </LoadingStyle>
    )
  } else
    return null;
}

export default Loading