import svgPaths from "./svg-0lh2jarhxa";

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
    <div className="absolute bg-[#fff5e6] h-[1273px] left-0 top-0 w-[1440px]" data-name="Container">
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
    <div className="absolute bg-[darkorange] h-[36px] left-0 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[128px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[64px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[82px]">Статистика</p>
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
    <div className="absolute h-[76px] left-[24px] top-[24px] w-[967px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[112px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[112px]">Загальний дохід</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[112px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px w-[100px]">1440 ₴</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[112px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p33a6fa00} fill="var(--fill-0, #00A63E)" />
            <path d={svgPaths.p2ec80c00} fill="var(--fill-0, #00A63E)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p25f0a580} fill="var(--fill-0, #00A63E)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-green-100 left-[136px] rounded-[4px] size-[48px] top-[2px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[25px] w-[174px]" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white h-[102px] left-0 rounded-[8px] top-0 w-[224px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[126px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[126px]">Всього замовлень</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[126px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px w-[18px]">6</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[126px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1bd15280} fill="var(--fill-0, #155DFC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-blue-100 left-[135.28px] rounded-[4px] size-[48px] top-[2px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[25px] w-[174px]" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white h-[102px] left-[247.72px] rounded-[8px] top-0 w-[224px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[78px]">Завершено</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[78px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px w-[17px]">2</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[78px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[25px] w-[174px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p3d8dc400} fill="var(--fill-0, #9810FA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-purple-100 left-[160.56px] rounded-[4px] size-[48px] top-[27px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-white h-[102px] left-[495.44px] rounded-[8px] top-0 w-[224px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[65px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[65px]">Активних</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[65px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px w-[18px]">3</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[65px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p87e1f0} fill="var(--fill-0, #F54900)" />
            <path d={svgPaths.p36d81df0} fill="var(--fill-0, #F54900)" />
            <path d={svgPaths.p2dcd6bc0} fill="var(--fill-0, #F54900)" />
            <path d={svgPaths.p1ddfce00} fill="var(--fill-0, #F54900)" />
            <path d={svgPaths.p11ef2180} fill="var(--fill-0, #F54900)" />
            <path d={svgPaths.p1b3bfda0} fill="var(--fill-0, #F54900)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#ffedd4] left-[135.72px] rounded-[4px] size-[48px] top-[2px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[25px] w-[174px]" data-name="Container">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-white h-[102px] left-[743.16px] rounded-[8px] top-0 w-[224px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[102px] left-[24px] top-[134px] w-[967px]" data-name="Container">
      <Container19 />
      <Container26 />
      <Container33 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[422px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[207px]">Продажі за останні 7 днів</p>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-[-0.25%] left-0 right-0 top-[-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 198">
          <g id="g">
            <path d="M0 197.5H351" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 148.25H351" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 99H351" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 49.75H351" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 0.5H351" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-0 left-[-0.14%] right-[-0.14%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 197">
          <g id="g">
            <path d="M0.5 0V197" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M59 0V197" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M117.5 0V197" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M176 0V197" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M234.5 0V197" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M293 0V197" id="Vector_6" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M351.5 0V197" id="Vector_7" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G2() {
  return (
    <div className="absolute contents inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <G />
      <G1 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[15px] left-[51.72px] top-[206.52px] w-[27px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[27px]">15.10</p>
    </div>
  );
}

function G3() {
  return (
    <div className="absolute contents left-[51.72px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_84.56%_12.24%_15.44%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[15px] left-[110.1px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">16.10</p>
    </div>
  );
}

function G4() {
  return (
    <div className="absolute contents left-[110.1px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_70.67%_12.24%_29.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[15px] left-[169.48px] top-[206.52px] w-[26px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[26px]">17.10</p>
    </div>
  );
}

function G5() {
  return (
    <div className="absolute contents left-[169.48px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_56.77%_12.24%_43.23%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[15px] left-[227.05px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">18.10</p>
    </div>
  );
}

function G6() {
  return (
    <div className="absolute contents left-[227.05px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_42.87%_12.24%_57.13%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[15px] left-[285.55px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">19.10</p>
    </div>
  );
}

function G7() {
  return (
    <div className="absolute contents left-[285.55px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_28.98%_12.24%_71.02%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[15px] left-[342.77px] top-[206.52px] w-[30px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[30px]">20.10</p>
    </div>
  );
}

function G8() {
  return (
    <div className="absolute contents left-[342.77px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_15.08%_12.24%_84.92%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[15px] left-[393.92px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">21.10</p>
    </div>
  );
}

function G9() {
  return (
    <div className="absolute contents left-[393.92px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_1.19%_12.24%_98.81%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container49 />
    </div>
  );
}

function G10() {
  return (
    <div className="absolute contents left-[51.72px] top-[202px]" data-name="g">
      <G3 />
      <G4 />
      <G5 />
      <G6 />
      <G7 />
      <G8 />
      <G9 />
    </div>
  );
}

function G11() {
  return (
    <div className="absolute contents left-[51.72px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_1.19%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
            <path d="M0 0.5H351" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G10 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[15px] left-[49.42px] top-[194.26px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">0</p>
    </div>
  );
}

function G12() {
  return (
    <div className="absolute contents left-[49.42px] top-[194.26px]" data-name="g">
      <div className="absolute inset-[85.23%_84.56%_14.77%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[15px] left-[34.09px] top-[145.01px] w-[24px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[24px]">400</p>
    </div>
  );
}

function G13() {
  return (
    <div className="absolute contents left-[34.09px] top-[145.01px]" data-name="g">
      <div className="absolute inset-[64.45%_84.56%_35.55%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[15px] left-[34.42px] top-[95.76px] w-[23px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[23px]">800</p>
    </div>
  );
}

function G14() {
  return (
    <div className="absolute contents left-[34.42px] top-[95.76px]" data-name="g">
      <div className="absolute inset-[43.67%_84.56%_56.33%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[15px] left-[29.66px] top-[46.51px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">1200</p>
    </div>
  );
}

function G15() {
  return (
    <div className="absolute contents left-[29.66px] top-[46.51px]" data-name="g">
      <div className="absolute inset-[22.89%_84.56%_77.11%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[15px] left-[29.53px] top-[1.26px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">1600</p>
    </div>
  );
}

function G16() {
  return (
    <div className="absolute contents left-[29.53px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_97.89%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container54 />
    </div>
  );
}

function G17() {
  return (
    <div className="absolute contents left-[29.53px] top-[1.26px]" data-name="g">
      <G12 />
      <G13 />
      <G14 />
      <G15 />
      <G16 />
    </div>
  );
}

function G18() {
  return (
    <div className="absolute contents left-[29.53px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 197">
            <path d="M0.5 0V197" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G17 />
    </div>
  );
}

function G19() {
  return (
    <div className="absolute inset-[9.7%_0.48%_13.5%_14.73%]" data-name="g">
      <div className="absolute inset-[-0.55%_-0.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359 184">
          <g id="g">
            <path d={svgPaths.p30536e60} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
            <g id="g_2">
              <path d={svgPaths.p2b5c7e00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.p1858300} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.p204d4e00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.p1807f900} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.p1552fd00} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.pbd50400} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
              <path d={svgPaths.p1e846e30} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[237px] left-0 overflow-clip top-0 w-[421px]" data-name="Container">
      <G2 />
      <G11 />
      <G18 />
      <G19 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[237px] left-0 top-0 w-[421px]" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[422px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[238px] left-[-16px] top-0 w-[422px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[256px] left-[25px] top-[69px] w-[422px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-white h-[327px] left-0 rounded-[8px] top-0 w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container42 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[422px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[144px]">Популярні товари</p>
    </div>
  );
}

function G20() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-[-0.25%] left-0 right-0 top-[-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 198">
          <g id="g">
            <path d="M0 197.5H351" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 148.25H351" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 99H351" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 49.75H351" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 0.5H351" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G21() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-0 left-[-0.14%] right-[-0.14%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 197">
          <g id="g">
            <path d="M35.6 0V197" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M176 0V197" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M316.4 0V197" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0.5 0V197" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M351.5 0V197" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G22() {
  return (
    <div className="absolute contents inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <G20 />
      <G21 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[15px] left-[83.15px] top-[206.52px] w-[34px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[34px]">Латте</p>
    </div>
  );
}

function G23() {
  return (
    <div className="absolute contents left-[83.15px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_76.22%_12.24%_23.78%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[15px] left-[145.53px] top-[206.52px] w-[50px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[50px]">Еспресо</p>
    </div>
  );
}

function G24() {
  return (
    <div className="absolute contents left-[145.53px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_59.55%_12.24%_40.45%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[15px] left-[207.27px] top-[206.52px] w-[67px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[67px]">Американо</p>
    </div>
  );
}

function G25() {
  return (
    <div className="absolute contents left-[207.27px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_42.87%_12.24%_57.13%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[15px] left-[280.96px] top-[206.52px] w-[60px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[60px]">Айс Латте</p>
    </div>
  );
}

function G26() {
  return (
    <div className="absolute contents left-[280.96px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_26.2%_12.24%_73.8%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[15px] left-[352.54px] top-[206.52px] w-[57px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[57px]">Капучино</p>
    </div>
  );
}

function G27() {
  return (
    <div className="absolute contents left-[352.54px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_9.52%_12.24%_90.48%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container66 />
    </div>
  );
}

function G28() {
  return (
    <div className="absolute contents left-[83.15px] top-[202px]" data-name="g">
      <G23 />
      <G24 />
      <G25 />
      <G26 />
      <G27 />
    </div>
  );
}

function G29() {
  return (
    <div className="absolute contents left-[65px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_1.19%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
            <path d="M0 0.5H351" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G28 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[15px] left-[49.42px] top-[194.26px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">0</p>
    </div>
  );
}

function G30() {
  return (
    <div className="absolute contents left-[49.42px] top-[194.26px]" data-name="g">
      <div className="absolute inset-[85.23%_84.56%_14.77%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[15px] left-[49.67px] top-[145.01px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">2</p>
    </div>
  );
}

function G31() {
  return (
    <div className="absolute contents left-[49.67px] top-[145.01px]" data-name="g">
      <div className="absolute inset-[64.45%_84.56%_35.55%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container68 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[15px] left-[49.23px] top-[95.76px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">4</p>
    </div>
  );
}

function G32() {
  return (
    <div className="absolute contents left-[49.23px] top-[95.76px]" data-name="g">
      <div className="absolute inset-[43.67%_84.56%_56.33%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[15px] left-[49.55px] top-[46.51px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">6</p>
    </div>
  );
}

function G33() {
  return (
    <div className="absolute contents left-[49.55px] top-[46.51px]" data-name="g">
      <div className="absolute inset-[22.89%_84.56%_77.11%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[15px] left-[49.56px] top-[1.26px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">8</p>
    </div>
  );
}

function G34() {
  return (
    <div className="absolute contents left-[49.56px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_97.89%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container71 />
    </div>
  );
}

function G35() {
  return (
    <div className="absolute contents left-[49.23px] top-[1.26px]" data-name="g">
      <G30 />
      <G31 />
      <G32 />
      <G33 />
      <G34 />
    </div>
  );
}

function G36() {
  return (
    <div className="absolute contents left-[49.23px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 197">
            <path d="M0.5 0V197" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G35 />
    </div>
  );
}

function G37() {
  return (
    <div className="absolute inset-[22.89%_69.59%_14.77%_17.11%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 148">
        <g id="g">
          <path d="M0 0H56V147.75H0L0 0Z" fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G38() {
  return (
    <div className="absolute inset-[43.67%_52.92%_14.77%_33.78%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 99">
        <g id="g">
          <path d="M0 0H56V98.5H0V0Z" fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G39() {
  return (
    <div className="absolute inset-[54.06%_36.24%_14.77%_50.46%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 74">
        <g id="g">
          <path d="M0 0H56V73.875H0V0Z" fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G40() {
  return (
    <div className="absolute inset-[54.06%_19.57%_14.77%_67.13%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 74">
        <g id="g">
          <path d="M0 0H56V73.875H0V0Z" fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G41() {
  return (
    <div className="absolute inset-[64.45%_2.89%_14.77%_83.81%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 50">
        <g id="g">
          <path d="M0 0H56V49.25H0V0Z" fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G42() {
  return (
    <div className="absolute contents inset-[22.89%_2.89%_14.77%_17.11%]" data-name="g">
      <G37 />
      <G38 />
      <G39 />
      <G40 />
      <G41 />
    </div>
  );
}

function G43() {
  return (
    <div className="absolute contents inset-[22.89%_2.89%_14.77%_17.11%]" data-name="g">
      <G42 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[237px] left-0 overflow-clip top-0 w-[421px]" data-name="Container">
      <G22 />
      <G29 />
      <G36 />
      <G43 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[237px] left-0 top-0 w-[421px]" data-name="Container">
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[422px]" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[238px] left-[-16px] top-0 w-[422px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[256px] left-[25px] top-[69px] w-[422px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-white h-[327px] left-[495px] rounded-[8px] top-0 w-[472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container61 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[327px] left-[24px] top-[270px] w-[967px]" data-name="Container">
      <Container60 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[422px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[275px]">Розподіл замовлень за статусами</p>
    </div>
  );
}

function G44() {
  return (
    <div className="absolute bottom-1/2 left-1/2 right-[31%] top-[20.77%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 70">
        <g id="g">
          <path d={svgPaths.pced2170} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G45() {
  return (
    <div className="absolute inset-[20.89%_40.5%_49.88%_40.5%]" data-name="g">
      <div className="absolute bottom-0 left-0 right-0 top-[-15.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <g id="g">
            <path d={svgPaths.p266f9180} fill="var(--fill-0, #10B981)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G46() {
  return (
    <div className="absolute bottom-1/2 left-[31%] right-1/2 top-[20.77%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 70">
        <g id="g">
          <path d={svgPaths.p33ca7f00} fill="var(--fill-0, #F97316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G47() {
  return (
    <div className="absolute bottom-[20.77%] left-[31%] right-1/2 top-1/2" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 70">
        <g id="g">
          <path d={svgPaths.pce5cc00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G48() {
  return (
    <div className="absolute bottom-[20.77%] left-[40.5%] right-[31%] top-1/2" data-name="g">
      <div className="absolute bottom-[-15.47%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 80">
          <g id="g">
            <path d={svgPaths.p71d68c0} fill="var(--fill-0, #6B7280)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G49() {
  return (
    <div className="absolute contents inset-[20.77%_31%]" data-name="g">
      <G44 />
      <G45 />
      <G46 />
      <G47 />
      <G48 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[237px] left-0 overflow-clip top-0 w-[421px]" data-name="Container">
      <G49 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[237px] left-0 top-0 w-[421px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[422px]" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[238px] left-0 top-[9.47px] w-[422px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[256px] left-[25px] top-[69px] w-[422px]" data-name="Container">
      <Container83 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-blue-600 left-0 rounded-[3.35544e+07px] size-[12px] top-[4px]" data-name="Container" />;
}

function Container86() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[82px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-px w-[82px]">Готується: 1</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[422px]" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return <div className="absolute bg-emerald-500 left-0 rounded-[3.35544e+07px] size-[12px] top-[4px]" data-name="Container" />;
}

function Container89() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[61px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-px w-[61px]">Готово: 1</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[422px]" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container91() {
  return <div className="absolute bg-orange-500 left-0 rounded-[3.35544e+07px] size-[12px] top-[4px]" data-name="Container" />;
}

function Container92() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[60px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-px w-[60px]">Очікує: 1</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[20px] left-0 top-[56px] w-[422px]" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return <div className="absolute bg-red-500 left-0 rounded-[3.35544e+07px] size-[12px] top-[4px]" data-name="Container" />;
}

function Container95() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[89px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-px w-[89px]">Скасовано: 1</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[20px] left-0 top-[84px] w-[422px]" data-name="Container">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return <div className="absolute bg-gray-500 left-0 rounded-[3.35544e+07px] size-[12px] top-[4px]" data-name="Container" />;
}

function Container98() {
  return (
    <div className="absolute h-[20px] left-[20px] top-0 w-[94px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-px w-[94px]">Завершено: 2</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[20px] left-0 top-[112px] w-[422px]" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[132px] left-[25px] top-[315px] w-[422px]" data-name="Container">
      <Container87 />
      <Container90 />
      <Container93 />
      <Container96 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-white left-0 rounded-[8px] size-[472px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container79 />
      <Container84 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[422px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[24px] left-[-1px] not-italic text-[16px] text-black top-[2px] w-[240px]">Кількість замовлень за 7 днів</p>
    </div>
  );
}

function G50() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-[-0.25%] left-0 right-0 top-[-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 198">
          <g id="g">
            <path d="M0 197.5H351" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 148.25H351" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 99H351" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 49.75H351" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0 0.5H351" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G51() {
  return (
    <div className="absolute inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <div className="absolute bottom-0 left-[-0.14%] right-[-0.14%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 197">
          <g id="g">
            <path d="M25.5714 0V197" id="Vector" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M75.7143 0V197" id="Vector_2" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M125.857 0V197" id="Vector_3" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M176 0V197" id="Vector_4" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M226.143 0V197" id="Vector_5" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M276.286 0V197" id="Vector_6" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M326.429 0V197" id="Vector_7" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M0.5 0V197" id="Vector_8" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
            <path d="M351.5 0V197" id="Vector_9" stroke="var(--stroke-0, #E4E4E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G52() {
  return (
    <div className="absolute contents inset-[2.11%_1.19%_14.77%_15.44%]" data-name="g">
      <G50 />
      <G51 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[15px] left-[76.79px] top-[206.52px] w-[27px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[27px]">15.10</p>
    </div>
  );
}

function G53() {
  return (
    <div className="absolute contents left-[76.79px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_78.61%_12.24%_21.39%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container103 />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[15px] left-[126.82px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">16.10</p>
    </div>
  );
}

function G54() {
  return (
    <div className="absolute contents left-[126.82px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_66.69%_12.24%_33.31%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container104 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[15px] left-[177.83px] top-[206.52px] w-[26px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[26px]">17.10</p>
    </div>
  );
}

function G55() {
  return (
    <div className="absolute contents left-[177.83px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_54.78%_12.24%_45.22%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container105 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-[15px] left-[227.05px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">18.10</p>
    </div>
  );
}

function G56() {
  return (
    <div className="absolute contents left-[227.05px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_42.87%_12.24%_57.13%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container106 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[15px] left-[277.2px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">19.10</p>
    </div>
  );
}

function G57() {
  return (
    <div className="absolute contents left-[277.2px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_30.96%_12.24%_69.04%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container107 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[15px] left-[326.05px] top-[206.52px] w-[30px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[30px]">20.10</p>
    </div>
  );
}

function G58() {
  return (
    <div className="absolute contents left-[326.05px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_19.05%_12.24%_80.95%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container108 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[15px] left-[377.39px] top-[206.52px] w-[28px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[28px]">21.10</p>
    </div>
  );
}

function G59() {
  return (
    <div className="absolute contents left-[377.39px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_7.14%_12.24%_92.86%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container109 />
    </div>
  );
}

function G60() {
  return (
    <div className="absolute contents left-[76.79px] top-[202px]" data-name="g">
      <G53 />
      <G54 />
      <G55 />
      <G56 />
      <G57 />
      <G58 />
      <G59 />
    </div>
  );
}

function G61() {
  return (
    <div className="absolute contents left-[65px] top-[202px]" data-name="g">
      <div className="absolute inset-[85.23%_1.19%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
            <path d="M0 0.5H351" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G60 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute h-[15px] left-[49.42px] top-[194.26px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">0</p>
    </div>
  );
}

function G62() {
  return (
    <div className="absolute contents left-[49.42px] top-[194.26px]" data-name="g">
      <div className="absolute inset-[85.23%_84.56%_14.77%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container110 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[15px] left-[39.33px] top-[145.01px] w-[18px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[18px]">0.5</p>
    </div>
  );
}

function G63() {
  return (
    <div className="absolute contents left-[39.33px] top-[145.01px]" data-name="g">
      <div className="absolute inset-[64.45%_84.56%_35.55%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[15px] left-[52.11px] top-[95.76px] w-[5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[5px]">1</p>
    </div>
  );
}

function G64() {
  return (
    <div className="absolute contents left-[52.11px] top-[95.76px]" data-name="g">
      <div className="absolute inset-[43.67%_84.56%_56.33%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container112 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-[15px] left-[41.7px] top-[46.51px] w-[16px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[16px]">1.5</p>
    </div>
  );
}

function G65() {
  return (
    <div className="absolute contents left-[41.7px] top-[46.51px]" data-name="g">
      <div className="absolute inset-[22.89%_84.56%_77.11%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container113 />
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute h-[15px] left-[49.67px] top-[1.26px] w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[15px] leading-[16px] left-0 not-italic text-[12px] text-black top-0 w-[8px]">2</p>
    </div>
  );
}

function G66() {
  return (
    <div className="absolute contents left-[49.67px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_97.89%_14.01%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Container114 />
    </div>
  );
}

function G67() {
  return (
    <div className="absolute contents left-[39.33px] top-[1.26px]" data-name="g">
      <G62 />
      <G63 />
      <G64 />
      <G65 />
      <G66 />
    </div>
  );
}

function G68() {
  return (
    <div className="absolute contents left-[39.33px] top-[1.26px]" data-name="g">
      <div className="absolute inset-[2.11%_84.56%_14.77%_15.44%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 197">
            <path d="M0.5 0V197" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <G67 />
    </div>
  );
}

function G69() {
  return (
    <div className="absolute inset-[2.11%_2.41%_14.77%_88.09%]" data-name="g">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 197">
        <g id="g">
          <path d="M0 0H40V197H0V0Z" fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G70() {
  return (
    <div className="absolute contents inset-[2.11%_2.41%_14.77%_88.09%]" data-name="g">
      <G69 />
    </div>
  );
}

function G71() {
  return (
    <div className="absolute contents inset-[2.11%_2.41%_14.77%_88.09%]" data-name="g">
      <G70 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[237px] left-0 overflow-clip top-0 w-[421px]" data-name="Container">
      <G52 />
      <G61 />
      <G68 />
      <G71 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[237px] left-0 top-0 w-[421px]" data-name="Container">
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[422px]" data-name="Container">
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[238px] left-[-16px] top-0 w-[422px]" data-name="Container">
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[256px] left-[25px] top-[69px] w-[422px]" data-name="Container">
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute bg-white left-[495px] rounded-[8px] size-[472px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container102 />
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[472px] left-[24px] top-[631px] w-[967px]" data-name="Container">
      <Container101 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[1103px] left-[251px] top-[100px] w-[1015px]" data-name="Container">
      <Container12 />
      <Container41 />
      <Container78 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[1273px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container9 />
      <Container122 />
    </div>
  );
}

export default function AdminPanelStatisticsScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Admin Panel (Statistics) Screen">
      <Container123 />
    </div>
  );
}