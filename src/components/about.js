import React from 'react';

function About() {
  function En() {
    if (localStorage.getItem('lang') === 'en') {
      return true
    } else if (localStorage.getItem('lang') === 'ar') {
      return false
    }
  }
    return (
      <>
        <div className='row mt-5'>
          <div className='col-3'></div>
          <div className='col-6'>
            <h6
              id='welcome'
              style={
                !En()
                  ? { letterSpacing: "0" }
                  : {}
              }
            >
              {En() ? "WELCOME" : "مرحبا"}
            </h6>
            <h1 id='welcomingTitle'>
              {En()
                ? " OUR 10 YEARS WORKING EXPERIENCE MAKE A DIFFERENT TOWELS."
                : "خبرتنا في العمل لمدة 10 سنوات تصنع مناشف مختلفة."}
            </h1>
            <hr />
          </div>
          <div className='col-3'></div>
        </div>
        <div className='row mt-2'>
          <div className='col-2'></div>
          <div className='col-8' id='welcomingParagraph'>
            {En()
              ? "Donec scelerisque dolor id nunc dictum, interdum gravida mauris  rhoncus.Aliquam at ultrices nunc.In sem leo, fermentum at lorem in , porta finibus mauris.Aliquam consectetur, ex in gravida porttitor, Donec scelerisque dolor id nunc dictum, interdum gravida  mauris rhoncus.Aliquam at ultrices nunc.In sem leo, fermentum at lorem in , porta finibus mauris."
              : 'في "بي إس ديچيتال" ، نصنع تجارب قائمة على الرؤى تحول العلامات التجارية إلى أفضل نسخة من نفسها. ساعدتنا خبرتنا الواسعة ومعرفتنا الشاملة بعلاماتنا التجارية وجماهيرنا على اكتساب رؤى لا تقدر بثمن في الأسواق متعددة الثقافات ، عبر العالم الرقمي. نعتقد أن كل شيء يحدث لسبب ما ، علينا فقط أن نجد ماهية هذا السبب.'}
          </div>
          <div className='col-2'></div>
        </div>
      </>
    );
}

export default About;