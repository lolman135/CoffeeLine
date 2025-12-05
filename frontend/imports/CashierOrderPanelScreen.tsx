import svgPaths from "./svg-k4b1fjq95c";

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
    <div className="absolute h-[32px] left-0 top-0 w-[173px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[32px] left-[-1px] not-italic text-[24px] text-black top-px tracking-[-0.6px] w-[175px]">Панель касира</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p3acef280} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12a687f0} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[32px] left-[682.69px] rounded-[6px] top-0 w-[104px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container10 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[63px] not-italic text-[14px] text-black text-center top-[6px] translate-x-[-50%] w-[62px]">Оновити</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[32px] w-[786px]" data-name="Container">
      <Container9 />
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[darkorange] h-[36px] left-0 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-0 w-[173px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[86.5px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[143px]">Активні замовлення</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[36px] left-[180.09px] rounded-[6px] top-0 w-[142px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[70.91px] not-italic text-[14px] text-black text-center top-[8px] translate-x-[-50%] w-[110px]">Всі замовлення</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[88px] w-[786px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[425px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[250px]">Замовлення #CL981245242</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[98px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[179px]">Петренко Іван Вадимович</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-[188px] top-0 w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[8px]">•</p>
    </div>
  );
}

function Container16() {
  return <div className="absolute h-[20px] left-[322px] top-0 w-[110px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-[328px] top-0 w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[8px]">•</p>
    </div>
  );
}

function Container18() {
  return <div className="absolute h-[20px] left-[656px] top-0 w-[171px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[711px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[205px] not-italic text-[14px] text-zinc-500 top-px w-[114px]">+380972004533</p>
      <Container17 />
      <Container18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[345px] not-italic text-[14px] text-zinc-500 top-px w-[172px]">вулиця Василя Стуса, 35</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[425px]" data-name="Container">
      <Container13 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#fef3c6] h-[22px] left-[678.44px] overflow-clip rounded-[2px] top-0 w-[58px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[9.56px] not-italic text-[#973c00] text-[12px] top-[3px] w-[42px]">Очікує</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[52px] left-[24px] top-0 w-[736px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[58px] left-px top-[25px] w-[784px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[17px] left-0 top-px w-[12px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-0 w-[12px]">•</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[17px] left-[11.81px] top-px w-[561px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[0.19px] not-italic text-[14px] text-black top-0 w-[613px]">Айс Латте (medium) x2 + Ванільний сироп, Горіховий сироп, Соєве молоко, Збиті вершки</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[736px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[113px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[119px]">Спосіб: Доставка</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-[133.02px] top-0 w-[118px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[118px]">Оплата: Готівкою</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[20px] left-[266.27px] top-0 w-[94px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[94px]">Сума: 280 ₴</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-[370.44px] top-0 w-[64px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-6.44px] not-italic text-[14px] text-zinc-500 top-px w-[71px]">Час: 12:33</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[36px] w-[736px]" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute left-[128px] size-[34px] top-[-1px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Container">
          <path d={svgPaths.p30177800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-blue-600 h-[36px] left-0 rounded-[2px] shadow-[0px_4px_6px_-4px_rgba(37,99,235,0.2),0px_10px_15px_-3px_rgba(37,99,235,0.2)] top-0 w-[363px]" data-name="Button">
      <Container32 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[193.73px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[70px]">Прийняти</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute left-[126px] size-[34px] top-px" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p538a2c0} fill="var(--fill-0, #EF4444)" fillRule="evenodd" />
            <path d={svgPaths.p9a1d900} fill="var(--fill-0, #EF4444)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[36px] left-[371px] rounded-[2px] top-0 w-[365px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container33 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[194.94px] not-italic text-[14px] text-center text-red-500 top-[8px] translate-x-[-50%] w-[76px]">Скасувати</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[72px] w-[736px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[108px] left-px top-[107px] w-[784px]" data-name="Container">
      <Container26 />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-white h-[240px] left-0 rounded-[8px] top-0 w-[786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container23 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[421px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[-1px] not-italic text-[18px] text-black top-[3px] w-[246px]">Замовлення #CL357412196</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[98px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[166px]">Дорев Дмитро Іванович</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-[174px] top-0 w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[8px]">•</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[20px] left-[194px] top-0 w-[110px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-4px] not-italic text-[14px] text-zinc-500 top-px w-[110px]">+380971266567</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[20px] left-[308px] top-0 w-[8px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[8px]">•</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[20px] left-[324px] top-0 w-[166px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[166px]">вул. Шевченка, 45, кв. 8</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[421px]" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[421px]" data-name="Container">
      <Container37 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#fef3c6] h-[22px] left-[678.44px] overflow-clip rounded-[2px] top-0 w-[58px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[16px] left-[9.56px] not-italic text-[#973c00] text-[12px] top-[3px] w-[42px]">Очікує</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[52px] left-[24px] top-0 w-[736px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[58px] left-px top-[25px] w-[784px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[17px] left-0 top-px w-[12px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-0 w-[12px]">•</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[17px] left-[11.81px] top-px w-[725px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-black top-0 w-[725px]">Американо (small) + Карамельний сироп, Ванільний сироп</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[736px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[125px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[126px]">Спосіб: Самовивіз</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[20px] left-[151px] top-0 w-[116px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[-10px] not-italic text-[14px] text-zinc-500 top-[2px] w-[118px]">Оплата: Карткою</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[20px] left-[273px] top-0 w-[84px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[74px]">Сума: 70 ₴</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-[361px] top-0 w-[69px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-zinc-500 top-px w-[69px]">Час: 12:31</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[36px] w-[736px]" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute left-[126px] size-[34px] top-[-2px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Container">
          <path d={svgPaths.p30177800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-blue-600 h-[36px] left-0 rounded-[2px] shadow-[0px_4px_6px_-4px_rgba(37,99,235,0.2),0px_10px_15px_-3px_rgba(37,99,235,0.2)] top-0 w-[363px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[193.73px] not-italic text-[14px] text-center text-white top-[8px] translate-x-[-50%] w-[70px]">Прийняти</p>
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute left-[126px] size-[34px] top-px" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3446da40} fill="var(--fill-0, #EF4444)" fillRule="evenodd" />
            <path d={svgPaths.p2bad3900} fill="var(--fill-0, #EF4444)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white h-[36px] left-[371px] rounded-[2px] top-0 w-[365px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container57 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[194.94px] not-italic text-[14px] text-center text-red-500 top-[8px] translate-x-[-50%] w-[76px]">Скасувати</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[72px] w-[736px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[108px] left-px top-[107px] w-[784px]" data-name="Container">
      <Container50 />
      <Container55 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-white h-[240px] left-0 rounded-[8px] top-[256px] w-[786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container47 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[496px] left-[24px] top-[148px] w-[786px]" data-name="Container">
      <Container36 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[676px] left-[303px] top-[86px] w-[834px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#fff5e6] h-[912px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container8 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[912px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container63 />
    </div>
  );
}

export default function CashierOrderPanelScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Cashier Order Panel Screen">
      <Container64 />
    </div>
  );
}