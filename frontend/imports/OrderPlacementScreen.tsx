import svgPaths from "./svg-t35k391vvs";

function Container() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p3eb47300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1808a500} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3cbb83f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-0 rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] size-[40px] to-[#ffa500] top-0" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[6px] w-[111px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[20px] top-[2px] w-[113px]">Coffee Line</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[163px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[6px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p11aa7200} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p31d1c680} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2f2f480} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[darkorange] left-[24px] rounded-[3.35544e+07px] size-[18px] top-[-5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[10px] not-italic text-[12px] text-center text-white top-[2px] translate-x-[-50%] w-[14px]">2</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[32px] left-[332px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[6px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1f1c3a00} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.p191ced00} fill="var(--fill-0, #333333)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[6px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p11b0a900} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2c345e00} fill="var(--fill-0, #333333)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p232cdd00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[36px] left-[16px] rounded-[2px] top-[32px] w-[167px]" data-name="Button">
      <Container11 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[95.5px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[121px]">Назад до кошика</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[1120px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px tracking-[-0.6px] w-[297px]">Оформлення замовлення</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[28px] left-[24px] top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[203px]">Контактна інформація</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[34px] left-px top-[25px] w-[737px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[-1px] not-italic text-[14px] text-black top-0 w-[30px]">ПІБ</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[36px] left-0 rounded-[2px] top-[22px] w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[17px] not-italic text-[16px] text-[rgba(51,51,51,0.7)] top-[6px] w-[350px]">Петренко Іван Вадимович</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[58px] left-[24px] top-0 w-[689px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[-1px] not-italic text-[14px] text-black top-0 w-[62px]">Телефон</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[36px] left-0 rounded-[2px] top-[22px] w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[17px] not-italic text-[16px] text-[rgba(51,51,51,0.7)] top-[6px] w-[350px]">+380972004533</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[58px] left-[24px] top-[74px] w-[689px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[132px] left-px top-[83px] w-[737px]" data-name="Container">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[14px] left-[-1px] not-italic text-[14px] text-black top-0 w-[62px]">Адреса</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[36px] left-0 rounded-[2px] top-[22px] w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[17px] not-italic text-[16px] text-[rgba(51,51,51,0.7)] top-[6px] w-[350px]">вулиця Василя Стуса, 35</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[58px] left-[25px] top-[239px] w-[689px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white h-[322px] left-0 rounded-[8px] top-0 w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container14 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[28px] left-[24px] top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[167px]">Спосіб отримання</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[34px] left-px top-[25px] w-[737px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-black left-[17px] rounded-[3.35544e+07px] size-[8px] top-[23px]" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[77px]">Доставка</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[280px]">{`Доставимо кур'єром до вказаної адреси`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[48px] left-[37px] top-[13px] w-[635px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[82px] left-[24px] rounded-[4px] top-0 w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute left-[17px] rounded-[3.35544e+07px] size-[8px] top-[23px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[164px]">Самовивіз з кав’ярні</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[254px]">Заберіть своє замовлення у бариста</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[48px] left-[37px] top-[13px] w-[635px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[82px] left-[24px] rounded-[4px] top-[98px] w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[180px] left-px top-[83px] w-[737px]" data-name="Container">
      <Container32 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-white h-[288px] left-0 rounded-[8px] top-[346px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container27 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[28px] left-[24px] top-0 w-[689px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[131px]">Спосіб оплати</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[34px] left-px top-[25px] w-[737px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[-1px] w-[73px]">Карткою</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[24px] left-[37px] top-[17px] w-[635px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute left-[17px] rounded-[3.35544e+07px] size-[8px] top-[23px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[58px] left-[24px] rounded-[4px] top-0 w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[24px] left-0 top-[-3px] w-[635px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[74px]">Готівкою</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[24px] left-[37px] top-[17px] w-[635px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-black left-[17px] rounded-[3.35544e+07px] size-[8px] top-[23px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="absolute h-[58px] left-[24px] rounded-[4px] top-[74px] w-[689px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[132px] left-px top-[83px] w-[737px]" data-name="Container">
      <Container45 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-white h-[240px] left-0 rounded-[8px] top-[658px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container41 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[984px] left-0 top-0 w-[739px]" data-name="Container">
      <Container25 />
      <Container39 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[24px] w-[273px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[201px]">Ваше замовлення</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[75px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[158px]">Айс Латте (medium) x2</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[20px] left-[233.48px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[14px] text-black top-px w-[42px]">280 ₴</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[273px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#e0e0e0] h-px left-0 top-[32px] w-[273px]" data-name="Container" />;
}

function Container58() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[83px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[85px]">До сплати</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[24px] left-[227.13px] top-0 w-[46px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[48px]">280 ₴</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[24px] left-0 top-[45px] w-[273px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[69px] left-[24px] top-[68px] w-[273px]" data-name="Container">
      <Container56 />
      <Container57 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[48px] left-[40px] top-[6px] w-[256px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[47px] leading-[16px] left-0 not-italic text-[#1c398e] text-[12px] top-0 w-[205px]">Після оформлення ви отримаєте унікальний номер замовлення для відстеження</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute left-[5px] size-[35px] top-[-3px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Container">
          <path d={svgPaths.p1ebc99b0} fill="var(--fill-0, #155DFC)" id="Vector" stroke="var(--stroke-0, #155DFC)" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#f1f6fc] h-[60px] left-[23px] rounded-[4px] top-[161px] w-[275px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[221px] left-px top-0 w-[321px]" data-name="Container">
      <Container53 />
      <Container61 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-white h-[271px] left-px rounded-[8px] top-0 w-[323px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[816px] left-[791px] top-0 w-[358px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[816px] left-[16px] top-[164px] w-[1148px]" data-name="Container">
      <Container52 />
      <Container67 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[darkorange] h-[36px] left-0 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[738px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[369px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[176px]">Підтвердити замовлення</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[36px] left-[17px] top-[1086px] w-[737px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[1072px] left-[144px] top-[77px] w-[1152px]" data-name="Container">
      <Button3 />
      <Container12 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#fff5e6] h-[1130px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container10 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[1225px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container71 />
    </div>
  );
}

export default function OrderPlacementScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Order placement Screen">
      <Container72 />
    </div>
  );
}