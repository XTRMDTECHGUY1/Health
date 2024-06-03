import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../src/assets/img/search_FILL0_wght300_GRAD0_opsz24.svg'
import dot2 from '../src/assets/img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';
import layer1 from '../src/assets/img/Layer8.png';
import layer2 from '../src/assets/img/Layer3.png';
import layer3 from '../src/assets/img/Layer4.png';
import layer4 from '../src/assets/img/Layer2.png';
import layer5 from '../src/assets/img/Layer5.png';
import layer6 from '../src/assets/img/Layer6.png';
import layer7 from '../src/assets/img/Layer7.png';
import layer8 from '../src/assets/img/Layer8.png';
import layer9 from '../src/assets/img/Layer9.png';
import layer10 from '../src/assets/img/Layer10.png';
import layer11 from '../src/assets/img/Layer11.png';
import layer12 from '../src/assets/img/Layer12.png';
import arrowdown from '../src/assets/img/expand_more_FILL0_wght300_GRAD0_opsz24.svg';
import Heart from '../src/assets/img/HeartBPM.svg';
import Rate from '../src/assets/img/respiratory rate.svg';
import Temperature from '../src/assets/img/temperature.svg';
import birth from '../src/assets/img/BirthIcon.svg'
import female from '../src/assets/img/FemaleIcon.svg'
import call from '../src/assets/img/PhoneIcon.svg'
import insure from '../src/assets/img/InsuranceIcon.svg'
import Button from 'react-bootstrap/Button'
import download from '../src/assets/img/download_FILL0_wght300_GRAD0_opsz24 (1).svg';
import red from '../src/assets/img/red.png';
import pop from '../src/assets/img/pop.png';
import { UserData } from "./Data";
import BarChart from "./components/BarChart";



const URL = "https://fedskillstest.coalitiontechnologies.workers.dev/auth"


const getJessica = async () =>{ 
const response = await fetch(URL);

const body = await response.json();

};

export const Home = () => {


    const [setUrl, url] = useState(null); 

const onClickHandler = async () => {

    const url = await getJessica();
    const gender = await getJessica();
    setUrl(await response.json());
};


useEffect(()=>{
    
}, []);









fetch('https://fedskillstest.coalitiontechnologies.workers.dev/wizards?token=1234').then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	render(data);
}).catch(function (error) {
	console.log(error);
});


let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);


fetch('https://fedskillstest.coalitiontechnologies.workers.dev/auth', {
	headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn(error);
});






















{/* Charts code */}
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
{/* End code */}
 














  return (
   <Container style={{marginBottom: '40px'}}>
 
    <Row>

    <Col md={3}>

        <div className='cards'>
        <div className='cardinner'>

                    <h1> Patients    <img src={Search} alt='' className='imageee'/></h1>


                <div className='media-scroller'>

                    <div className='media-element'>
                    <img src={layer1} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer2} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Ryan Johnson   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Male, 45 <img src={dot2} alt='' className='image21'style={{marginLeft: '97px'}}/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer3} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Ryan Mitchell   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Male, 36 <img src={dot2} alt='' className='image21'style={{marginLeft: '97px'}}/></p>
                    </div>

                    <div className='textcc'>
                   <button onClick={onClickHandler} style={{border: 'none', height: '60px', backgroundColor: 'transparent'}}>
                    
                    <a href=''style={{textDecoration: 'none'}}>
                    <div className='media-element'>
                    <img src={layer4} alt='' className='imagee1' style={{marginLeft: '-82px'}}/> 
                <b className='text' style={{fontSize:'11px', marginLeft: '5px'}}>    Jessica Taylor </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'36px',marginTop: '-19px'}}>
                Female, 28 <img src={dot2} alt='' className='image21'/></p>
                    </div></a>
                    </button></div>
                   

                    <div className='media-element'>
                    <img src={layer5} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Samantha Johnson   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 56 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer6} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer7} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer8} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer9} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer10} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer11} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                    <div className='media-element'>
                    <img src={layer12} alt='' className='imagee1' /> 
                <b className='text' style={{fontSize:'11px'}}>    Emily Williams   </b> 
                <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', 
                marginLeft:'39px',marginTop: '-19px'}}>
                Female, 18 <img src={dot2} alt='' className='image21'/></p>
                    </div>
                </div><div></div></div> </div>

{/* Blood TEST */}

    </Col>


    <Col md={4} >

        <div className='cardss'>
        <div className='cardinnerr'>

        <h1> Diagnosis History</h1>

        <div className='cardsa'>
        <Row>
        <Col>
        <h2> Blood Pressure <b className='txt'style={{marginLeft: '40px'}}> Last 6 months <img src={arrowdown} alt='' className='imageb' /> </b></h2>  
        <br/>
        <div style={{ width: '250px', height: '800px', marginTop: '-10px', marginLeft:'10px'}}>
        <BarChart chartData={userData} />
      </div>

        </Col>

        <Col>
        <h2> <img src={pop} alt='' className='imageb' /> Symbolic <b className='txt'>  </b></h2>  
        
        <h1 style={{marginLeft: '50px', fontSize: '20px', marginTop:'-20px'}}> 160</h1>
        <h1 style={{marginLeft: '20px', fontSize: '11px', marginTop:'-15px'}}> <img src={red} alt='' className='imageb' /> Higher than average</h1>
        <hr style={{width: '170px'}}/>
        <h2 style={{marginTop:'-19px'}}> <img src={red} alt='' className='imageb' /> Diastonic <b className='txt'>  </b></h2>  
        <h1 style={{marginLeft: '50px', fontSize: '20px', marginTop:'-19px'}}> 160</h1>
        <h1 style={{marginLeft: '20px', fontSize: '11px', marginTop:'-15px'}}> <img src={red} alt='' className='imageb' /> Lower than average</h1>

        </Col>
        </Row>
        <div>
       </div>
        




        </div>
        
 
        </div>

        <Row>
        <Col>
        <div className='cardbc'>
        <div className='cardinnerr'>

        <img src={Rate} alt='' className='imglog' />
        <h4> Respiratory Rate </h4>
        <h3> <b>20 bpm</b></h3>
        <h4> Normal </h4>
        </div>

        
        </div>
        </Col>

{/* Rate, Temperature, Heart */}

        <Col>
        <div className='cardac'>
        <div className='cardinnerr'>

        <img src={Temperature} alt='' className='imglog' />
        <h4>Temperature</h4>
        <h3> <b>96.6F</b></h3>
        <h4> Normal </h4>
        </div>

        
        </div>
        </Col>
        <Col>
        <div className='cardcc'>
        <div className='cardinnerr'>

        <img src={Heart} alt='' className='imglog' />
        <h4> Heart Rate </h4>
        <h3> <b>78 bpm</b></h3>
        <h4> Lower than Average </h4>
        </div>

        
        </div>

        
        </Col>


        
        </Row>
        

        {/* END HERE */}
        
        </div>

<br/>

{ /* Diagonsis List */}
        <div className='cardst'>
        <div className='cardinnerr'>

        <h1> Diagnosis History</h1>
</div>
 <div className='cardad'>
        <div className='cardinnerr'>
<Row>
        <Col className='h5'>
        <h5> Problem/Diagnosis</h5>
        </Col>

        <Col className='h7A'>
        <h5> Description</h5>
        </Col>

        <Col className='h6'>
        <h5> Status</h5>
        </Col>

        <Col className='h5'>
        <h5> Hypertension</h5>
        </Col>

        <Col className='h7'>
        <h5> Chronic high blood pressure</h5>
        </Col>

        <Col className='h6'>
        <h5> Under Observation</h5>
        </Col>
        <Col className='h5'>
        <h5> Type 2 Diabetes</h5>
        </Col>

        <Col className='h7'>
        <h5> Inculin resistance </h5>
        </Col>

        <Col className='h6'>
        <h5> Curved</h5>
        </Col>
        <Col className='h5'>
        <h5> Asthma</h5>
        </Col>

        <Col className='h7'>
        <h5> Recurrent episode </h5>
        </Col>

        <Col className='h6'>
        <h5> Inactive</h5>
        </Col>


        
</Row>
</div></div> 
</div> 

   
    </Col>

<Col md={4}>
<div className='cardsq'>
    <div className='cardinnera '>
<img src={layer4} alt=''className='imgwo' />
<br/><br/>
<h4 style={{fontSize: '17px', marginTop: '-10px', marginLeft: '60px', fontWeight: 'bold'}}>Jessica Taylor</h4>
<div style={{marginLeft:'20px',}}>
                    <img src={birth} alt='' className='imageea' /> 
                <b className='text'style={{fontSize:'12px',fontWeight: 'lighter',marginLeft:'5px'}}>    Date of Birth  </b> 
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'10px', 
                marginLeft:'39px',marginTop: '-16px'}}>
                2006-08-19 </p>
                </div>
                  

                    <div style={{marginLeft:'20px',marginTop: '-20px'}}>
                    <img src={female} alt='' className='imageea' /> 
                <b className='text' style={{fontSize:'12px',fontWeight: 'lighter',marginLeft:'5px'}}>    Gender   </b> 
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'10px', 
                marginLeft:'39px',marginTop: '-16px'}}>
                Female </p>
                    </div>
                    <div style={{marginLeft:'20px',marginTop: '-20px'}}>
                    <img src={call} alt='' className='imageea' /> 
                <b className='text' style={{fontSize:'12px',fontWeight: 'lighter',marginLeft:'5px'}}>    Contact Info.   </b> 
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'10px', 
                marginLeft:'39px',marginTop: '-16px'}}>
                (711) 984-6696 </p>
                    </div >
                    <div style={{marginLeft:'20px',marginTop: '-20px'}}>
                    <img src={call} alt='' className='imageea' /> 
                <b className='text' style={{fontSize:'12px',fontWeight: 'lighter',marginLeft:'5px'}}>    Emergency Contact  </b> 
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'10px', 
                marginLeft:'39px',marginTop: '-16px'}}>
                (680) 653-9512 </p>
                    </div>
                    <div style={{marginLeft:'20px', marginTop: '-20px'}}>
                    <img src={insure} alt='' className='imageea' /> 
                <b className='text' style={{fontSize:'12px',fontWeight: 'lighter',marginLeft:'15px'}}>    Insurance Provider   </b> 
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'10px',
                marginLeft:'45px',marginTop: '-16px'}}>
                Permier Auto Corporation </p>
                    </div>
                   
                   
                    <Button  className='btnn' style={{borderRadius: '90px',backgroundColor:'#01F0D0;'}}><b style={{fontSize: '11px', bottom: '90',textAlign: 'center', }}> Show all Information</b> </Button>
    
<br/><br/>


<div className='cardsal'>
        <div className='cardinnerra'>

                    <h1 style={{fontSize: '22px'}}> Lab Results  </h1>
<br/>
                    <div >
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'12px',
                marginLeft:'39px',marginTop: '-19px', }}>
               Blood Test  <img src={download} alt=''  style={{marginLeft: '110px'}}/> </p>
               
                    </div>
                    <div style={{marginTop: '30px'}}>
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'12px',
                marginLeft:'39px',marginTop: '-19px', }}>
               CT Scan <img src={download} alt=''  style={{marginLeft: '125px'}}/> </p>
               
                    </div>
                    <div style={{marginTop: '30px'}}>
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'12px',
                marginLeft:'39px',marginTop: '-19px',}}>
               X-Ray <img src={download} alt=''  style={{marginLeft: '140px'}}/> </p>
               
                    </div>
                    <div style={{marginTop: '30px'}}>
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'12px',
                marginLeft:'39px',marginTop: '-19px', }}>
               Urine  <img src={download} alt=''  style={{marginLeft: '145px'}}/> </p>
               
                    </div>
                    <div style={{marginTop: '30px'}}>
                <p style={{color: 'black', fontWeight: 'bold', fontSize:'12px',
                marginLeft:'39px',marginTop: '-19px',}}>
               Radiology Report  <img src={download} alt=''  style={{marginLeft: '180px', marginTop:'-40px'}}/> </p>
               
                    </div>
                   
                </div> </div>


    </div></div>


</Col>

    </Row>
   </Container>
  )
}

export default Home
