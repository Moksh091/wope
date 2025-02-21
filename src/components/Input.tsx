function Input({value}:{ value: string}) {
  return (
    <div className="">
      <div>Email address</div>
      <div className="mt-1">
        <input type="text" value={value} placeholder="eg@mail.com" className="outline-hidden pl-4 border border-[#2c2c34] rounded-lg py-2 w-full bg-[#202029]  "/>
      </div>
    </div>
  );
}

export default Input