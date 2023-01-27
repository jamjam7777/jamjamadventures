import React, {useState} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const image = [
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_1073.JPG.jpeg",
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_2776.jpg.jpeg",
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_2195.HEIC.jpeg",
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_2402.HEIC.jpeg",
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_3042.HEIC.jpeg",
  "https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_3371.HEIC.jpeg",
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_3634.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_4286.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_4631.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_4724.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_4937.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_5046.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_5102.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_5564.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_5936.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_7933.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/IMG_7938.HEIC.jpeg',
  'https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/jamjamadventures/img_5973%20(1).JPG.jpeg',

];

const AdventureGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i)=> { 
        setData({img, i})
    }
    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: image[i+1], i: i+1});
        }
        if(action === 'back-img'){
            setData({img: image[i-1], i: i-1});
        }
        if(!action)
            setData({img: '', i: 0});
    }
  return (
    <>
    { data.img &&
        <div style={{
            width: '100%',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        }}>
            <button onClick={()=> imgAction()}style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
            <button onClick={() => imgAction('back-img')}>Back</button>
            <img src={ data.img } style={{ width:'auto', maxWidth:'90%', maxHeight:'90%'}}/>
            <button onClick={() => imgAction('next-img')}>Next</button>
        </div> 
    
    }
      <div style={{padding: 10}}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="18px">
            {image.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={()=>viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
     
    </>
  );
}

export default AdventureGallery;
