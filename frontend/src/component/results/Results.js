import React from 'react'
import fireworks from '../../images/Fireworks.gif'
import winner from '../../images/vector51.png'
import runnerup1 from '../../images/vector52.png'
import runnerup2 from '../../images/vector53.png'

const Results = () => {
  return (
    <div className='container'>
      <div class="card mb-3 text-center my-5" style={{ backgroundImage: "url(" + fireworks + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black' }}>
        <img src={winner} class="card-img-top" alt="winner" style={{ width: '30%', margin: 'auto' }} />
        <div class="card-body">
          <h1 class="card-title" style={{ color: 'rgb(232,85,16)' }}>Team Dominator Coders</h1>
          <h5 class="card-text my-2" style={{ color: 'white' }}>DHRUVIL KETANKUMAR PATEL</h5>
          <h5 className='card-text my-2' style={{ color: 'white' }}>PATEL PARTHKUMAR BHAVIKBHAI</h5>
        </div>
      </div>
      <div class="card mb-3 text-center my-5" style={{ backgroundImage: "url(" + fireworks + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black' }}>
        <img src={runnerup1} class="card-img-top" alt="winner" style={{ width: '30%', margin: 'auto' }} />
        <div class="card-body">
          <h1 class="card-title" style={{ color: 'rgb(232,85,16)' }}>Team FitGeeks</h1>
          <h5 class="card-text my-2" style={{ color: 'white' }}>SMIT JITEN BHANSALI</h5>
          <h5 className='card-text my-2' style={{ color: 'white' }}>ADITYA CHAUHAN</h5>
          <h5 className='card-text my-2' style={{ color: 'white' }}>PRATHAM SHAH</h5>
        </div>
      </div>
      <div class="card mb-3 text-center my-5" style={{ backgroundImage: "url(" + fireworks + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'black' }}>
        <img src={runnerup2} class="card-img-top" alt="winner" style={{ width: '30%', margin: 'auto' }} />
        <div class="card-body">
          <h1 class="card-title" style={{ color: 'rgb(232,85,16)' }}>Team Believer</h1>
          <h5 class="card-text my-2" style={{ color: 'white' }}>AKSHIT TRIVEDI</h5>
          <h5 className='card-text my-2' style={{ color: 'white' }}>JAY PATEL</h5>
        </div>
      </div>
    </div>
  );
}

export default Results