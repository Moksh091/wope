function Button({onClick}: {onClick: any}) {
    return <div onClick={onClick} className="bg-[#8f8fff] text-black py-2 rounded-lg flex justify-center hover:bg-[#beb8ff] cursor-pointer">
        Continue with email
    </div>
}

export default Button;