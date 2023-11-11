export default interface IService {
  create?(doc: any): any;
  find?(): any;
  findOne?(): any;
  findById?(id: any): any;
  update?(id: any): any;
  delete?(id: any): any;
}
