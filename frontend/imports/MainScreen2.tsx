import svgPaths from "./svg-d91u4tan2y";
import imgImage from '../src/imgEspresso.jpg';
import imgImage1 from '../src/imgCappuccino.jpg';
import imgImage2 from '../src/imgLatte.jpeg';
import imgImage3 from '../src/imgAmericano.jpg';
import imgImage4 from '../src/imgRaf.jpg';

function Container() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1248px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[36px] leading-[36px] left-[624.25px] not-italic text-[#333333] text-[30px] text-center top-0 translate-x-[-50%] w-[181px]">Наше меню</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[28px] left-0 top-[48px] w-[1248px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[28px] left-[624.19px] not-italic text-[#666666] text-[18px] text-center top-[3px] translate-x-[-50%] w-[559px]">Оберіть ваш улюблений напій з нашого широкого асортименту</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[76px] left-[16px] top-[16px] w-[1248px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[32px] left-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] top-[5px] w-[69px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[34.5px] not-italic text-[#666666] text-[14px] text-center top-[6px] translate-x-[-50%] w-[23px]">Всі</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[32px] left-[169.81px] rounded-[8px] top-[5px] w-[108px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[54px] not-italic text-[#666666] text-[14px] text-center top-[6px] translate-x-[-50%] w-[62px]">Холодне</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[83.38px] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[5px] w-[77px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[39px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[50px]">Гаряче</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white h-[42px] left-[482.63px] rounded-[12px] top-0 w-[283px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[42px] left-[16px] top-[124px] w-[1248px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[18px] top-[3px] w-[78px]">Еспресо</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[40px] left-0 top-[32px] w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[199px]">Класичний міцний еспресо з насиченим смаком</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[72px] left-[16px] top-[16px] w-[260px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[81px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[28px] left-[-1.5px] not-italic text-[20px] text-[darkorange] top-[2px] w-[84px]">від 45 ₴</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[147.7px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[113px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[56.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[91px]">Обрати опції</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[260px]" data-name="Container">
      <Container8 />
      <Button3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[148px] left-px top-[317px] w-[292px]" data-name="Container">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[490px] left-0 rounded-[12px] top-0 w-[294px]" data-name="Container">
      <div className="h-[490px] overflow-clip relative rounded-[inherit] w-[294px]">
        <div className="absolute left-px rounded-tl-[12px] rounded-tr-[12px] size-[292px] top-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-full left-[-22.5%] max-w-none top-[-0.53%] w-[149.93%]" src={imgImage} />
          </div>
        </div>
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[18px] top-[3px] w-[90px]">Капучино</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[40px] left-0 top-[32px] w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[190px]">Ніжний капучино з пишною молочною піною</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[72px] left-[16px] top-[16px] w-[260px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[80px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[28px] left-[-1.5px] not-italic text-[20px] text-[darkorange] top-[2px] w-[83px]">від 55 ₴</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[147.7px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[113px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[56.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[91px]">Обрати опції</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[260px]" data-name="Container">
      <Container15 />
      <Button4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[148px] left-px top-[317px] w-[292px]" data-name="Container">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white h-[490px] left-[318px] rounded-[12px] top-0 w-[294px]" data-name="Container">
      <div className="h-[490px] overflow-clip relative rounded-[inherit] w-[294px]">
        <div className="absolute left-px rounded-tl-[12px] rounded-tr-[12px] size-[292px] top-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-full left-[-31.48%] max-w-none top-0 w-[163.64%]" src={imgImage1} />
          </div>
        </div>
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[18px] top-[3px] w-[55px]">Латте</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[40px] left-0 top-[32px] w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[224px]">{`М'який кавовий напій з великою кількістю молока`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[72px] left-[16px] top-[16px] w-[260px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[81px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[28px] left-[-1.5px] not-italic text-[20px] text-[darkorange] top-[2px] w-[84px]">від 60 ₴</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[147.7px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[113px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[56.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[91px]">Обрати опції</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[260px]" data-name="Container">
      <Container22 />
      <Button5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[148px] left-px top-[317px] w-[292px]" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white h-[490px] left-[636px] rounded-[12px] top-0 w-[294px]" data-name="Container">
      <div className="h-[490px] overflow-clip relative rounded-[inherit] w-[294px]">
        <div className="absolute left-px rounded-tl-[12px] rounded-tr-[12px] size-[292px] top-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-full left-[-36.58%] max-w-none top-0 w-[180%]" src={imgImage2} />
          </div>
        </div>
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[18px] top-[3px] w-[105px]">Американо</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[209px]">Еспресо з додаванням гарячої води</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[52px] left-[16px] top-[16px] w-[260px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[82px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[28px] left-[-1.5px] not-italic text-[20px] text-[darkorange] top-[2px] w-[85px]">від 40 ₴</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[147.7px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[113px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[56.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[91px]">Обрати опції</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[260px]" data-name="Container">
      <Container29 />
      <Button6 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[128px] left-px top-[317px] w-[292px]" data-name="Container">
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white h-[490px] left-[954px] rounded-[12px] top-0 w-[294px]" data-name="Container">
      <div className="h-[490px] overflow-clip relative rounded-[inherit] w-[294px]">
        <div className="absolute left-px rounded-tl-[12px] rounded-tr-[12px] size-[292px] top-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-34.93%] w-full" src={imgImage3} />
          </div>
        </div>
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[18px] top-[3px] w-[78px]">Раф</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[40px] left-0 top-[32px] w-[260px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[222px]">Солодкий кавовий напій зі вершками та ванільним цукром</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[72px] left-[16px] top-[16px] w-[260px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[81px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[24px] leading-[28px] left-[-1.5px] not-italic text-[20px] text-[darkorange] top-[2px] w-[84px]">від 75 ₴</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[darkorange] h-[32px] left-[147.7px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[113px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[56.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[91px]">Обрати опції</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[100px] w-[260px]" data-name="Container">
      <Container36 />
      <Button7 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[148px] left-px top-[317px] w-[292px]" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-white h-[490px] left-0 rounded-[12px] top-[513px] w-[294px]" data-name="Container">
      <div className="h-[490px] overflow-clip relative rounded-[inherit] w-[294px]">
        <div className="absolute left-px rounded-tl-[12px] rounded-tr-[12px] size-[292px] top-px" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgImage4} />
        </div>
        <Container38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[996px] left-[16px] top-[198px] w-[1248px]" data-name="Container">
      <Container11 />
      <Container18 />
      <Container25 />
      <Container32 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[1210px] left-[80px] top-[104px] w-[1280px]" data-name="Container">
      <Container2 />
      <Container4 />
      <Container40 />
    </div>
  );
}

function Container42() {
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

function Container43() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-0 rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] size-[40px] to-[#ffa500] top-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[6px] w-[111px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[20px] top-[2px] w-[113px]">Coffee Line</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[163px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
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

function Button8() {
  return (
    <div className="absolute h-[32px] left-[332px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container47() {
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

function Button9() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container48() {
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

function Button10() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-neutral-100 h-[36px] left-0 rounded-[8px] top-0 w-[320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[20px] left-[41px] not-italic text-[#333333] text-[14px] top-[8px] w-[262px]">Пошук напоїв...</p>
    </div>
  );
}

function Container50() {
  return <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Container" />;
}

function Container51() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[320px]" data-name="Container">
      <Container49 />
      <Container50 />
      <div className="absolute inset-[26.29%_91.62%_31.03%_3.58%]" data-name="Vector">
        <div className="absolute inset-[-6.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1103fe20} id="Vector" stroke="var(--stroke-0, #333333)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container45 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#fff5e6] h-[1314px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container41 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[1400px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container55 />
    </div>
  );
}

export default function MainScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Main Screen 2">
      <Container56 />
    </div>
  );
}