import svgPaths from "./svg-2szytm5gzq";
import imgImage from '../src/imgIcedLatte.jpg';

function Container() {
  return (
    <div className="absolute h-[916px] left-0 top-0 w-[544px]" data-name="Container">
      <div className="absolute h-[816px] left-0 rounded-[16px] top-0 w-[544px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[544px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[36px] leading-[36px] left-[-1px] not-italic text-[#0f0f0f] text-[30px] top-0 tracking-[-0.75px] w-[148px]">Айс Латте</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[544px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[24px] left-0 not-italic text-[16px] text-neutral-500 top-[2px] w-[378px]">Охолоджений латте з льодом</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[544px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[494px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-px w-[108px]">Оберіть розмір</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[20px] left-[17px] top-[13px] w-[104px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#0f0f0f] text-[14px] top-px w-[104px]">Малий (250мл)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[20px] left-[445.72px] top-[13px] w-[32px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[-1px] not-italic text-[#ff6b00] text-[14px] top-px w-[34px]">65 ₴</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[46px] left-0 rounded-[4px] top-0 w-[494px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[20px] left-[18px] top-[14px] w-[124px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-px w-[126px]">Середній (350мл)</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-[445.09px] top-[14px] w-[31px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[-1px] not-italic text-[#ff6b00] text-[14px] top-px w-[33px]">85 ₴</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,107,0,0.1)] h-[48px] left-0 rounded-[4px] top-[54px] w-[494px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#ff6b00] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20px] left-[17px] top-[13px] w-[117px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[#0f0f0f] text-[14px] top-px w-[117px]">Великий (450мл)</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[445.7px] top-[13px] w-[32px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[20px] left-[-1px] not-italic text-[#ff6b00] text-[14px] top-px w-[34px]">98 ₴</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[46px] left-0 rounded-[4px] top-[110px] w-[494px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[156px] left-0 top-[32px] w-[494px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[188px] left-[24px] top-0 w-[494px]" data-name="Container">
      <Container4 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-neutral-200 h-px left-[24px] top-[204px] w-[494px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[494px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-px w-[178px]">{`Додатки (необов'язково)`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[117px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[119px]">Ванільний сироп</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[145px]" data-name="Container">
      <Button3 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-[454px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[40px]">+ 15 ₴</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[494px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[141px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[143px]">Карамельний сироп</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[169px]" data-name="Container">
      <Button4 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-[454px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[40px]">+ 15 ₴</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[494px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[115px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[117px]">Горіховий сироп</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[143px]" data-name="Container">
      <Button5 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-[454px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[40px]">+ 15 ₴</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[494px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[133px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[135px]">Мигдальне молоко</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[161px]" data-name="Container">
      <Button6 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[20px] left-[450.63px] top-0 w-[44px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[44px]">+ 20 ₴</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-0 top-[96px] w-[494px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[122px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[124px]">Кокосове молоко</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[150px]" data-name="Container">
      <Button7 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-[450.63px] top-0 w-[44px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[44px]">+ 20 ₴</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[20px] left-0 top-[128px] w-[494px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[99px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[101px]">Соєве молоко</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[127px]" data-name="Container">
      <Button8 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[20px] left-[454px] top-0 w-[40px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[40px]">+ 15 ₴</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[20px] left-0 top-[160px] w-[494px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[177px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[179px]">Додатковий шот еспресо</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[205px]" data-name="Container">
      <Button9 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[20px] left-[450.63px] top-0 w-[44px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[44px]">+ 20 ₴</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[20px] left-0 top-[192px] w-[494px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] left-0 rounded-[4px] size-[16px] top-[2px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[93px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-0 w-[95px]">Збиті вершки</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[121px]" data-name="Container">
      <Button10 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[20px] left-[453.47px] top-0 w-[41px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[41px]">+ 10 ₴</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[20px] left-0 top-[224px] w-[494px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[244px] left-0 top-[32px] w-[494px]" data-name="Container">
      <Container18 />
      <Container22 />
      <Container26 />
      <Container30 />
      <Container34 />
      <Container38 />
      <Container42 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[276px] left-[24px] top-[221px] w-[494px]" data-name="Container">
      <Container14 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-neutral-200 h-px left-[24px] top-[513px] w-[494px]" data-name="Container" />;
}

function Container50() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[494px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[17px] leading-[20px] left-[-1px] not-italic text-[#0f0f0f] text-[14px] top-px w-[66px]">Кількість</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white left-0 rounded-[2px] size-[36px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute bg-black h-[2px] left-[10px] rounded-[3px] top-[17px] w-[16px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute left-[48px] size-[36px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[10px] not-italic text-[#0f0f0f] text-[14px] top-[8px] w-[16px]">1</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white pointer-events-auto rounded-[2px] size-[36px] sticky top-0" data-name="Button">
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

function Container52() {
  return (
    <div className="absolute h-[36px] left-0 top-[32px] w-[494px]" data-name="Container">
      <Button11 />
      <Container51 />
      <div className="absolute bottom-0 left-[96px] pointer-events-none top-0">
        <Button12 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[68px] left-[24px] top-[530px] w-[494px]" data-name="Container">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[598px] left-px top-[25px] w-[542px]" data-name="Container">
      <Container12 />
      <Container13 />
      <Container48 />
      <Container49 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-white h-[648px] left-0 rounded-[8px] top-[92px] w-[544px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[115px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-0 not-italic text-[14px] text-neutral-500 top-px w-[115px]">Ціна за одиницю</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[28px] left-0 top-[20px] w-[115px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-0 not-italic text-[#0f0f0f] text-[18px] top-[3px] w-[58px]">85 ₴</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[16px] w-[115px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[95px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[20px] left-[95px] not-italic text-[14px] text-neutral-500 text-right top-px translate-x-[-100%] w-[95px]">Загальна ціна</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[28px] left-0 top-[20px] w-[95px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[28px] left-[97.23px] not-italic text-[#0f0f0f] text-[18px] text-right top-[3px] translate-x-[-100%] w-[58px]">85 ₴</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[48px] left-[433.77px] top-[16px] w-[95px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-white h-[80px] left-0 rounded-[4px] top-[764px] w-[544px]" data-name="Container">
      <Container58 />
      <Container61 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[darkorange] h-[48px] left-0 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] top-[868px] w-[544px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[24px] left-[272.39px] not-italic text-[16px] text-center text-white top-[12px] translate-x-[-50%] w-[132px]">Додати у кошик</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[916px] left-[576px] top-0 w-[544px]" data-name="Container">
      <Container3 />
      <Container55 />
      <Container62 />
      <Button13 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[916px] left-[80px] top-[71px] w-[1120px]" data-name="Container">
      <Container />
      <Container63 />
    </div>
  );
}

function Container65() {
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

function Button14() {
  return (
    <div className="absolute h-[36px] left-[80px] rounded-[2px] top-[3px] w-[177px]" data-name="Button">
      <Container65 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[20px] leading-[20px] left-[100.5px] not-italic text-[#0f0f0f] text-[14px] text-center top-[8px] translate-x-[-50%] w-[131px]">Назад до каталогу</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[1210px] left-[80px] top-[106px] w-[1280px]" data-name="Container">
      <Container64 />
      <Button14 />
    </div>
  );
}

function Container67() {
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

function Container68() {
  return (
    <div className="absolute bg-gradient-to-b from-[#ff8c00] left-0 rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] size-[40px] to-[#ffa500] top-0" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[6px] w-[111px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[28px] left-[-1px] not-italic text-[#333333] text-[20px] top-[2px] w-[113px]">Coffee Line</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[163px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
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

function Button15() {
  return (
    <div className="absolute h-[32px] left-[332px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container71 />
    </div>
  );
}

function Container72() {
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

function Button16() {
  return (
    <div className="absolute h-[32px] left-[384px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container72 />
    </div>
  );
}

function Container73() {
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

function Button17() {
  return (
    <div className="absolute h-[32px] left-[436px] rounded-[6px] top-[2px] w-[40px]" data-name="Button">
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[36px] left-[804px] top-[2px] w-[476px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[40px] left-[80px] top-[12px] w-[1280px]" data-name="Container">
      <Container70 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-white h-[65px] left-0 top-0 w-[1440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-[#fff5e6] h-[1275px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container66 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[1400px] left-0 top-0 w-[1440px]" data-name="Container">
      <Container77 />
    </div>
  );
}

export default function ProductDetailsScreen() {
  return (
    <div className="bg-[#fff5e6] relative size-full" data-name="Product Details Screen">
      <Container78 />
    </div>
  );
}