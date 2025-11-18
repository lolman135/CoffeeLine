import svgPaths from "./svg-7pu42cx4zd";
import imgImage from "figma:asset/cacb5bfa3a2c41f2bf01f6b83131c1337e02546b.png";

function Container() {
  return (
    <div className="absolute h-[32px] left-[16px] top-[84px] w-[1017px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-18px] not-italic text-[24px] text-black top-px tracking-[-0.6px] w-[79px]">Кошик</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[53px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[92px]">Айс Латте</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[508px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[119px]">Розмір: Середній</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20px] left-0 top-[60px] w-[508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[508px]">Додатки: Ванільний сироп, Горіховий сироп, Соєве молоко, Збиті вершки</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[43px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-[darkorange] top-[2px] w-[45px]">140 ₴</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[124px] left-[112px] top-0 w-[508px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[124px] left-[24px] top-0 w-[620px]" data-name="Container">
      <div className="absolute left-0 rounded-[4px] size-[96px] top-0" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage} />
      </div>
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[172px] left-px top-[25px] w-[668px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[24px] left-[435.66px] top-[4px] w-[32px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[24px] left-[16.06px] not-italic text-[16px] text-black text-center top-[2px] translate-x-[-50%] w-[12px]">2</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white left-[392px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute bg-black h-[2px] left-[10px] rounded-[3px] top-[17px] w-[16px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white left-[476px] rounded-[2px] size-[36px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute bg-black h-[2px] left-[10px] rounded-[3px] top-[17px] w-[16px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[10px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-black h-[2px] rounded-[1px] w-[16px]" />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[32px] left-[202px] top-[117px] w-[508px]" data-name="Container">
      <Container9 />
      <Button />
      <Button1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p25ffdf80} fill="var(--fill-0, #FF4D4D)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p28f23100} fill="var(--fill-0, #FF4D4D)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute left-[690px] size-[20px] top-[25px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white h-[174px] left-0 rounded-[8px] top-0 w-[745px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container8 />
      <Container10 />
      <Button2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[222px] left-[-16px] top-0 w-[745px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[24px] w-[273px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[201px]">Підсумок замовлення</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[75px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#666666] text-[14px] top-px w-[159px]">Айс Латте (medium) x2</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-[233.48px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[14px] text-black top-px w-[42px]">280 ₴</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[273px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[#e0e0e0] h-px left-0 top-[32px] w-[273px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[83px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[85px]">До сплати</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24px] left-[227.13px] top-0 w-[46px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[48px]">280 ₴</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[24px] left-0 top-[45px] w-[273px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[69px] left-[24px] top-[68px] w-[273px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Container21 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[darkorange] h-[36px] left-[24px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-[161px] w-[273px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[137px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[162px]">Оформити замовлення</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[221px] left-px top-px w-[321px]" data-name="Container">
      <Container14 />
      <Container22 />
      <Button3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-white h-[271px] left-0 rounded-[8px] top-0 w-[323px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[271px] left-[781px] top-0 w-[323px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[271px] left-[16px] top-[148px] w-[1017px]" data-name="Container">
      <Container13 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[451px] left-0 top-[-91px] w-[1120px]" data-name="Container">
      <Container />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[360px] left-[80px] top-[71px] w-[1120px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
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

function Button4() {
  return (
    <div className="absolute h-[36px] left-[80px] rounded-[2px] top-[3px] w-[177px]" data-name="Button">
      <Container29 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[108.5px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[147px]">Продовжити покупки</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[431px] left-[80px] top-[106px] w-[1280px]" data-name="Container">
      <Container28 />
      <Button4 />
    </div>
  );
}

function Container31() {
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

function Container32() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-0 rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] size-[40px] to-[#ffa500] top-0" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[6px] w-[111px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[20px] top-[2px] w-[113px]">Coffee Line</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[163px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
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

function Container36() {
  return (
    <div className="absolute bg-[darkorange] left-[24px] rounded-[3.35544e+07px] size-[18px] top-[-5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[10px] not-italic text-[12px] text-center text-white top-[2px] translate-x-[-50%] w-[14px]">2</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[32px] left-[332px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
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

function Button6() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container37 />
    </div>
  );
}

function Container38() {
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

function Button7() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container34 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#fff5e6] h-[537px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container30 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[537px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container42 />
    </div>
  );
}

export default function CartScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Cart Screen">
      <Container43 />
    </div>
  );
}