export const uuidV4 = () : string => {
  let uuid

  function generateNumber(limit:number){
    var value = limit * Math.random();
    return value | 0
  }
  function generateX(){
    var value = generateNumber(16);
    return value.toString(16);
  }
  function generateXes(count:number){
    let result = '';
    for(let i =0;i< count;i++){
      result += generateX();
    }
    return result;
  }
  function generateVariant(){
    var value = generateNumber(16);
    var variant =  (value &0x3) | 0x8;
    return variant.toString(16)
  }
  uuid = [
    generateXes(8),
    '-',
    generateXes(4),
    '-', '4',
    generateXes(3),
    '-',
    generateVariant(),
    generateXes(3),
    '-',
    generateXes(12)
  ].join('')

  return uuid
}