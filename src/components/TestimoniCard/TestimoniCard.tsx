import { forwardRef } from 'react';
import doubleTick from '../../assets/double-tick.svg'

// function TestimoniCard(props: any) {
//   return (
//     <div className="bg-slate-200 rounded-3xl w-[52rem] mr-14 flex-[0_0_auto] px-16 py-10">
//       <div className="pb-4 pt-5 mb-5">
//         <div>
//           <img className="w-12" src={doubleTick} alt="" />
//         </div>
//         <div className="mx-14 py-5 h-[12rem]">
//           <p className="text-xl">
//             {props.testimoni}
//           </p>
//         </div>
//         <div className="w-full">
//           <img className="rotate-180 w-12 ml-auto" src={doubleTick} alt="" />
//         </div>
//       </div>
//       <div className="flex justify-start items-center">
//         <div className="overflow-hidden rounded-full bg-red-500">
//           <img
//             className="w-14 object-cover object-center"
//             src={props.userImg}
//             alt=""
//           />
//         </div>
//         <div className="ml-8">
//           <p className="font-semibold text-xl">{props.userName} - {props.userCompany}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

const TestimoniCard = forwardRef((props: any, ref:any) => (
  <div className="bg-slate-200 rounded-3xl w-[52rem] mr-14 flex-[0_0_auto] px-16 py-10" ref={ref}>
      <div className="pb-4 pt-5 mb-5">
        <div>
          <img className="w-12" src={doubleTick} alt="" />
        </div>
        <div className="mx-14 py-5 h-[12rem]">
          <p className="text-xl">
            {props.testimoni}
          </p>
        </div>
        <div className="w-full">
          <img className="rotate-180 w-12 ml-auto" src={doubleTick} alt="" />
        </div>
      </div>
      <div className="flex justify-start items-center">
        <div className="overflow-hidden rounded-full bg-red-500">
          <img
            className="w-14 object-cover object-center"
            src={props.userImg}
            alt=""
          />
        </div>
        <div className="ml-8">
          <p className="font-semibold text-xl">{props.userName} - {props.userCompany}</p>
        </div>
      </div>
    </div>
))

export default TestimoniCard;
