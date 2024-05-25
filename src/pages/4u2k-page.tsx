import React, { useState, useEffect } from "react";

import { URLs } from "../__data__/urls";
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InMainHeader } from '../components/in-main-header';
import { Caption } from '../components/caption';
import { ContentSection } from '../components/content-section';
import { Main1 } from '../components/common';


const u2k = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(`${URLs.api.main}/4u2k-links`)
    .then(response=>response.json())
    .then(data=>{setData(data.data.datecreated)})
},[])    
  return (
    <>
      <Header />
      <Main1>
        <InMainHeader reverse>
          <div>
            <Caption><h1><span>4U2K</span> PAGE</h1></Caption>
            <p>4u2k - частое сокращение из американской переписки,<br /> оно означает “for you to know” - так,
              чтобы ты знал. <br /> <br /> А чтобы получить ещё полезного - смотри видео, <br /> слушай
              подкасты и,
              конечно, приходи на встречи нашего клуба!</p>
          </div>
          <img width="523.4" height="412" src={require('../assets/4u2k/book.png')} alt="" />
        </InMainHeader>
        {data.map((item) => (
          <ContentSection type={item.type} links={item.links}></ContentSection>
        ))}

      </Main1>
      <Footer />
    </>
  );
};

export default u2k;