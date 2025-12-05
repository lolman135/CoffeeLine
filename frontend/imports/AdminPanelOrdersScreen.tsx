import svgPaths from "./svg-orpjst1htw";

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
    <div className="absolute bg-[darkorange] h-[36px] left-[151.36px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[134px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[67px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[88px]">Замовлення</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[36px] left-[308.55px] rounded-[6px] top-0 w-[90px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[45px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[44px]">Меню</p>
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
    <div className="absolute h-[28px] left-0 top-0 w-[705px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[141px]">Всі замовлення</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[142px] w-[705px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[53px] left-0 top-0 w-[146px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[50px]">Номер</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[53px] left-[192px] top-0 w-[146px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[48px]">Клієнт</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[53px] left-[460px] top-0 w-[99px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[40px]">Сума</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[53px] left-[639px] top-0 w-[97px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[17px] w-[51px]">Статус</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[53px] left-[860px] top-0 w-[106px]" data-name="Table Head">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[-43px] not-italic text-[14px] text-black top-[17px] w-[37px]">Дата</p>
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[92px]">CL357412196</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[190px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[166px]">Шевченко Анна Іванівна</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[43px]">335 ₴</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[22px] left-[24px] overflow-clip rounded-[6px] top-[17px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[6px] not-italic text-[#9f0712] text-[12px] top-[3px] w-[65px]">Скасовано</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[133px]">21.10.2025, 10:55:57</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[55px] left-0 top-0 w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[91px]">CL797146713</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[224px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[201px]">Коваленко Дмитро Петрович</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[53px]">295 ₴</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[17px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[5px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Завершено</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[128px]">21.10.2025, 11:19:57</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[55px] left-0 top-[55px] w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[100px]">CL466562483</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[178px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[154px]">Бойко Марія Сергіївна</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[42px]">200 ₴</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-blue-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[16px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[18px] not-italic text-[#193cb8] text-[12px] top-[3px] w-[41px]">Готово</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[131px]">21.10.2025, 14:17:46</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[55px] left-0 top-[110px] w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[93px]">CL481561978</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[184px]">Мельник Олег Васильович</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[49px]">170 ₴</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#fef9c2] h-[22px] left-[24px] overflow-clip rounded-[6px] top-[17px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[19px] not-italic text-[#894b00] text-[12px] top-[3px] w-[40px]">Очікує</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[129px]">21.10.2025, 14:18:01</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[55px] left-0 top-[165px] w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[91px]">CL495119241</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[201px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[177px]">Ткаченко Софія Андріївна</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18px] w-[43px]">340 ₴</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-purple-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[17px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[9px] not-italic text-[#6e11b0] text-[12px] top-[3px] w-[60px]">Готується</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[129px]">21.10.2025, 14:18:15</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[55px] left-0 top-[220px] w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[55px] left-0 top-0 w-[146px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[95px]">CL791278654</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[55px] left-[191px] top-0 w-[232px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[24px] not-italic text-[14px] text-black top-[19px] w-[208px]">Лисенко Богдан Миколайович</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[55px] left-[460px] top-0 w-[99px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[23px] not-italic text-[14px] text-black top-[18.5px] w-[43px]">100 ₴</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-green-100 h-[22px] left-[24px] overflow-clip rounded-[6px] top-[17px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[5px] not-italic text-[#016630] text-[12px] top-[3px] w-[68px]">Завершено</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[55px] left-[626px] top-0 w-[133px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[55px] left-[860px] top-0 w-[181px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-42px] not-italic text-[14px] text-black top-[18.5px] w-[129px]">21.10.2025, 14:23:11</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[55px] left-0 top-[275px] w-[966px]" data-name="Table Row">
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
    <div className="absolute h-[330px] left-0 top-[53px] w-[966px]" data-name="Table Body">
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
    <div className="absolute h-[382px] left-0 top-0 w-[966px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[382px] left-px top-px w-[966px]" data-name="Container">
      <Table />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white h-[384px] left-[24px] rounded-[4px] top-[194px] w-[967px]" data-name="Container">
      <div className="h-[384px] overflow-clip relative rounded-[inherit] w-[967px]">
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[686px] left-[251px] top-[100px] w-[1015px]" data-name="Container">
      <Container12 />
      <Container14 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container9 />
      <Container23 />
    </div>
  );
}

export default function AdminPanelOrdersScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Admin Panel (Orders) Screen">
      <Container24 />
    </div>
  );
}