import svgPaths from "./svg-vlkv9314um";

function Container() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.padf1000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p3d1f7600} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p35c4d680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-[152px] rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] size-[80px] to-[#ffa500] top-0" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[32px] left-[129.02px] top-[96px] w-[126px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[#333333] text-[24px] top-px tracking-[-0.6px] w-[128px]">Coffee Line</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[20px] left-[71.77px] top-[136px] w-[241px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[120.23px] not-italic text-[#666666] text-[14px] text-center top-px translate-x-[-50%] w-[244px]">{`Ласкаво просимо до нашої кав'ярні`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[156px] left-[32px] top-[32px] w-[384px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[darkorange] h-[40px] left-0 rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-0 w-[188px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[94px] not-italic text-[14px] text-center text-white top-[11px] translate-x-[-50%] w-[86px]">Авторизація</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e0e0e0] h-[40px] left-[196px] rounded-[8px] top-0 w-[188px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[94.02px] not-italic text-[#666666] text-[14px] text-center top-[11px] translate-x-[-50%] w-[79px]">Реєстрація</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[220px] w-[384px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[17px] left-0 top-[4px] w-[36px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#333333] text-[14px] top-0 w-[38px]">Email</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-neutral-100 h-[50px] left-0 rounded-[8px] top-0 w-[384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[17px] not-italic text-[16px] text-[rgba(51,51,51,0.7)] top-[13px] w-[350px]">your@email.com</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[50px] left-0 top-[24px] w-[384px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[74px] left-0 top-0 w-[384px]" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[17px] left-0 top-[4px] w-[52px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#333333] text-[14px] top-0 w-[54px]">Пароль</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-neutral-100 h-[50px] left-0 rounded-[8px] top-0 w-[384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[17px] not-italic text-[16px] text-[rgba(51,51,51,0.7)] top-[13px] w-[350px]">••••••••</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[50px] left-0 top-[24px] w-[384px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[74px] left-0 top-[94px] w-[384px]" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] h-[48px] left-0 rounded-[8px] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] to-[#ffa500] top-[188px] w-[384px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[191.5px] not-italic text-[16px] text-center text-white top-[14px] translate-x-[-50%] w-[131px]">Авторизуватися</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[17px] left-[135px] top-0 w-[121px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[60.5px] not-italic text-[14px] text-[darkorange] text-center top-0 translate-x-[-50%] w-[123px]">Зареєструватися</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[17px] left-[64px] top-[256px] w-[256.422px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[64.5px] not-italic text-[#666666] text-[14px] text-center top-0 translate-x-[-50%] w-[129px]">Не маєте акаунту?</p>
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[276px] left-[32px] top-[284px] w-[384px]" data-name="Container">
      <Container9 />
      <Container13 />
      <Button2 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white h-[592px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] top-0 w-[448px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[16px] left-0 top-[608px] w-[448px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-[224.38px] not-italic text-[#666666] text-[12px] text-center top-0 translate-x-[-50%] w-[236px]">© 2025 Coffee Line. Всі права захищені.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[668px] left-[496px] top-[166px] w-[448px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#fff5e6] h-[1000px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[1000px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Container">
      <Container20 />
    </div>
  );
}

export default function LoginScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Login Screen">
      <Container21 />
    </div>
  );
}