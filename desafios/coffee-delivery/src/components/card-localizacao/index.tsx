import { MapPin } from "@phosphor-icons/react";

export function CardLocalizacao() {
    return (
        <div className="bg-[#EBE5F9] flex items-center p-2 rounded-[8px]">
            <MapPin 
                weight="fill"
                color="#4B2995"
                size={32}
            />
            <p className="text-[#4B2995] text-[14px]">Porto Alegre, RS</p>
        </div>
    )
}