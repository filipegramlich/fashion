export interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
}

export default function Contact({ buttonText, title, subTitle }: Props) {
  return (
    <>
      <label htmlFor="my-modal" className="btn">open modal</label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-[360px] h-[720px] flex flex-col items-center gap-4">
          <section className={" flex flex-col items-center"}>
            <h1 className="
                text-[30px] font-sans
                leading-9 
                text-[#292929] 
                ">
              Contact us
            </h1>
            <p className="
                font-sm  font-sans
                text-[#292929]
                ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </section>
          {
            /* <section>
            <div className="modal-action ">
              <label
                htmlFor="my-modal"
                className="btn w-[328px] bg-[#273746] h-10 font-sm text-white "
              >
                Submit
              </label>
            </div>
          </section> */
          }
        </div>
      </div>
    </>
  );
}
