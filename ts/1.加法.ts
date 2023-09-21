type BuildArray<
  Length extends number,
  El = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends Length ? Arr : BuildArray<Length, El, [El, ...Arr]>

// 加法
type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]['length']
type addResult = Add<32, 21>
