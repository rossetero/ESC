import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InMainHeader } from '../components/in-main-header';
import { Caption } from '../components/caption';
import { ContentSection } from '../components/content-section';
import { Main1 } from '../components/common';


const u2kData = [
  {
    type: "video",
    links: {
      l1: "https://www.youtube.com/embed/DsQMLrPdLf8?si=l9X57nHqaSYlxDFf",
      l2: "https://www.youtube.com/embed/Dk8AAU_UdVk?si=N8NdYMUCfawdsJGE",
      l3: "https://www.youtube.com/embed/HKfDfWrCwEA?si=qPugjiKR8V9eZ-yG",
      l4: "https://www.youtube.com/embed/tD-6xHAHrQ4?si=ZFe41gSK8d5gqahW",
    }
  },
  {
    type: "podcast",
    links: {
      l1: "https://www.youtube.com/embed/RtVs87Nd1MQ?si=i4giUCtbp4Ouqv2W",
      l2: "https://www.youtube.com/embed/DfTU5LA_kw8?si=m7fI5Ie9yIGDFCrU",
      l3: "https://www.youtube.com/embed/Sp-1fX1Q15I?si=xyealVly9IBMW7Xi",
      l4: "https://www.youtube.com/embed/rLYFJYfluRs?si=MjW1beQ-Q9-TAehF",
    }
  },
  {
    type: "entertainment",
    links: {
      l1: "https://www.youtube.com/embed/DiuuglRCchQ?si=8wTVXKbV-mbHuSjW",
      l2: "https://www.youtube.com/embed/zmZcIX5PEyo?si=Hbrv32kl0fqcmtV9",
      l3: "https://www.youtube.com/embed/Te-TZUjmzFQ?si=fNG16eruoFEY2KNq",
      l4: "https://www.youtube.com/embed/si-MQ5qg3zE?si=67mfO6gV80n1ULqo",
    }
  }

];

const u2k = () => {
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
        {u2kData.map((item) => (
          <ContentSection type={item.type} links={item.links}></ContentSection>
        ))}

      </Main1>
      <Footer />
    </>
  );
};

export default u2k;