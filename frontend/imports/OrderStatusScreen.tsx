import svgPaths from "./svg-r3to1jj5ar";

function Container() {
  return <div className="absolute h-[32px] left-[16px] top-[84px] w-[1017px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[451px] left-0 top-[-91px] w-[1120px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[360px] left-[80px] top-[71px] w-[1120px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p232cdd00} fill="var(--fill-0, #0F0F0F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-[440px] rounded-[2px] top-[3px] w-[177px]" data-name="Button">
      <Container3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[108.5px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[147px]">Назад до меню</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[431px] left-[80px] top-[106px] w-[1280px]" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container5() {
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

function Container6() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-0 rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] size-[40px] to-[#ffa500] top-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[6px] w-[111px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[20px] top-[2px] w-[113px]">Coffee Line</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[163px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
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

function Button1() {
  return (
    <div className="absolute h-[32px] left-[332px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container9 />
    </div>
  );
}

function Container10() {
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

function Button2() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container10 />
    </div>
  );
}

function Container11() {
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

function Button3() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container8 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-[134.67px] size-[64px] top-[32px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Container">
          <rect height="59" rx="29.5" stroke="var(--stroke-0, #FF8C00)" strokeWidth="5" width="59" x="2.5" y="2.5" />
          <line id="Line 5" stroke="var(--stroke-0, #FF8C00)" strokeLinecap="round" strokeWidth="5" x1="30.8281" x2="30.8281" y1="12.5" y2="32.5" />
          <line id="Line 6" stroke="var(--stroke-0, #FF8C00)" strokeLinecap="round" strokeWidth="5" x1="45.1251" x2="30.8102" y1="40.6722" y2="33.9846" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[270px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[135px] not-italic text-[#101828] text-[20px] text-center top-[2px] translate-x-[-50%] w-[272px]">Очікується підтвердження</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[17px] left-[158px] top-px w-[94px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[47px] not-italic text-[#ff6900] text-[14px] text-center top-0 translate-x-[-50%] w-[96px]">CL981245242</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[270px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[87.95px] not-italic text-[#6a7282] text-[14px] text-center top-px translate-x-[-50%] w-[141px]">Номер замовлення:</p>
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[120px] w-[270px]" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[270px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[24px] left-[-1px] not-italic text-[#101828] text-[16px] top-[2px] w-[155px]">Деталі замовлення</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-0 top-[6px] w-[157px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[157px]">Айс Латте (medium) x2</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[24px] left-[225.47px] top-[4px] w-[44px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[24px] left-[-1px] not-italic text-[#101828] text-[16px] top-[2px] w-[46px]">280 ₴</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[32px] left-0 top-[40px] w-[270px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[55px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[24px] left-[-1px] not-italic text-[#101828] text-[16px] top-[6px] w-[57px]">Всього</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[24px] left-[225.47px] top-0 w-[44px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[24px] left-[-1.47px] not-italic text-[#101828] text-[16px] top-[6px] w-[46px]">280 ₴</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-0 top-[9px] w-[270px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[33px] left-0 top-[88px] w-[270px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[130px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-px w-[130px]">Спосіб отримання:</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[20px] left-[211.53px] top-0 w-[58px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-7.53px] not-italic text-[#101828] text-[14px] top-0 w-[67px]">Доставка</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-0 top-[17px] w-[270px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[54px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-px w-[54px]">Оплата:</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[20px] left-[208.36px] top-0 w-[61px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-0.36px] not-italic text-[#101828] text-[14px] top-px w-[63px]">Готівкою</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-0 top-[45px] w-[270px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[106px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-px w-[106px]">Час створення:</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-[131.98px] top-0 w-[138px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#101828] text-[14px] top-px w-[140px]">21.10.2025, 12:33:01</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[20px] left-0 top-[73px] w-[270px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[93px] left-0 top-[137px] w-[270px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[230px] left-[32px] top-[324px] w-[270px]" data-name="Container">
      <Container20 />
      <Container23 />
      <Container27 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-gray-200 h-[2px] left-[31px] top-[39px] w-[213px]" data-name="Container" />;
}

function Container40() {
  return (
    <div className="absolute bg-[#ff6900] left-[20.75px] rounded-[3.35544e+07px] size-[32px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16.55px] not-italic text-[14px] text-center text-white top-[7px] translate-x-[-50%] w-[16px]">1</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[36px] w-[58px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[15px] leading-[16px] left-[29px] not-italic text-[#ff6900] text-[12px] text-center top-0 translate-x-[-50%] w-[60px]">Прийнято</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white h-[52px] left-[16px] top-[24px] w-[74px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-gray-200 left-[21.17px] rounded-[3.35544e+07px] size-[32px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16.55px] not-italic text-[#99a1af] text-[14px] text-center top-[7px] translate-x-[-50%] w-[16px]">2</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[36px] w-[59px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-[29.5px] not-italic text-[#99a1af] text-[12px] text-center top-0 translate-x-[-50%] w-[59px]">Готується</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-white h-[52px] left-[106.38px] top-[24px] w-[75px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-gray-200 left-[11.88px] rounded-[3.35544e+07px] size-[32px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[16.55px] not-italic text-[#99a1af] text-[14px] text-center top-[7px] translate-x-[-50%] w-[16px]">3</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[16px] left-[8px] top-[36px] w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-[20px] not-italic text-[#99a1af] text-[12px] text-center top-0 translate-x-[-50%] w-[40px]">Готово</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-white h-[52px] left-[197.58px] top-[24px] w-[56px]" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[100px] left-[32px] top-[200px] w-[270px]" data-name="Container">
      <Container39 />
      <Container42 />
      <Container45 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[586px] left-px top-[25px] w-[334px]" data-name="Container">
      <Container15 />
      <Container19 />
      <Container38 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-white h-[636px] left-[517px] rounded-[12px] top-[170px] w-[336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#fff5e6] h-[912px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container4 />
      <Container14 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[912px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container52 />
    </div>
  );
}

export default function OrderStatusScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Order Status Screen">
      <Container53 />
    </div>
  );
}