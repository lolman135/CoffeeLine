import svgPaths from "./svg-0bm4w3h2vn";

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
          <path d={svgPaths.p1f1c3a00} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.p191ced00} fill="var(--fill-0, #333333)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function Container5() {
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

function Button1() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container3 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#fff5e6] h-[786px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[32px] left-0 top-[-6px] w-[967px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px tracking-[-0.6px] w-[270px]">Панель адміністратора</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[6px] top-0 w-[128px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[64px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[82px]">Статистика</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[36px] left-[151.36px] rounded-[6px] top-0 w-[134px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[67px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[88px]">Замовлення</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[darkorange] h-[36px] left-[308.55px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[90px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[45px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[44px]">Меню</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[36px] left-0 top-[50px] w-[967px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[86px] left-[24px] top-[24px] w-[967px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-[-5px] size-[41px] top-[-5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="Container">
          <path d={svgPaths.p2c97480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-blue-600 h-[36px] left-[24px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(37,99,235,0.2),0px_4px_6px_-1px_rgba(37,99,235,0.2)] top-[134px] w-[128px]" data-name="Button">
      <Container13 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[75px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[98px]">Додати товар</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[127px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[44px]">Назва</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[53px] left-[211px] top-0 w-[116px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[70px]">Категорія</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[53px] left-[411px] top-0 w-[130px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[84px]">Базова ціна</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[53px] left-[625px] top-0 w-[132px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[51px]">Статус</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[53px] left-[841px] top-0 w-[128px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18px] w-[23px]">Дії</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[966px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[61px]">Еспресо</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[48px]">Гаряче</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[31px]">45 ₴</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3.5px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p1840ea80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p29aa5d80} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p123957f0} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p405f000} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-[44px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[69px] left-0 top-[0.5px] w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[70px]">Капучино</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[48px]">Гаряче</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[30px]">55 ₴</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p1840ea80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p29aa5d80} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p123957f0} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p405f000} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute left-[44px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[69px] left-0 top-[69px] w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[43px]">Латте</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[48px]">Гаряче</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[31px]">60 ₴</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p3ca9ad80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11bf6d00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p92f600} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3bac8c0} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[44px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[69px] left-0 top-[138px] w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[81px]">Американо</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[48px]">Гаряче</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[31px]">40 ₴</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p3ca9ad80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11bf6d00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p92f600} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3bac8c0} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute left-[44px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[69px] left-0 top-[207px] w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[73px]">Айс Латте</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[59px]">Холодне</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[30px]">65 ₴</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p3ca9ad80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11bf6d00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p3ca9ad80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11bf6d00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-[70px]" data-name="Button">
      <Container32 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container31 />
      <Button14 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p92f600} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3bac8c0} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute left-[44px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[69px] left-0 top-[276px] w-[966px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[127px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[25.5px] w-[29px]">Раф</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[69px] left-[211px] top-0 w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[48px]">Гаряче</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[69px] left-[411px] top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[25.5px] w-[30px]">70 ₴</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[23.5px] w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[8px] not-italic text-[#016630] text-[12px] top-[3.5px] w-[68px]">Доступний</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[69px] left-[625px] top-0 w-[132px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p92f600} fill="var(--fill-0, #EF4444)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3bac8c0} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[47px] rounded-[2px] size-[36px] top-[0.5px]" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[16.5px] w-[80px]" data-name="Container">
      <Button17 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[69px] left-[841px] top-0 w-[128px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[69px] left-[-3px] top-[345.5px] w-[969px]" data-name="Table Row">
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[414px] left-0 top-[52.5px] w-[632px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[466px] left-0 top-0 w-[632px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[466px] left-px top-px w-[966px]" data-name="Container">
      <Table />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-white h-[468px] left-[24px] rounded-[4px] top-[194px] w-[967px]" data-name="Container">
      <div className="h-[468px] overflow-clip relative rounded-[inherit] w-[967px]">
        <Container38 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[686px] left-[251px] top-[100px] w-[1015px]" data-name="Container">
      <Container12 />
      <Button5 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container9 />
      <Container40 />
    </div>
  );
}

export default function AdminPanelMenuScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Admin Panel (Menu) Screen">
      <Container41 />
    </div>
  );
}