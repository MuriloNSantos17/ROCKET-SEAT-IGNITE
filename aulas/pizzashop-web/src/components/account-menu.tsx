import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { Button } from "./ui/button";
import { getManagementRestaurant } from "@/api/get-management-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Fragment } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile.dialog";
import { SignOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";

export function AccountMenu() {
    const navigate = useNavigate();

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagementRestaurant,
        staleTime: Infinity
    })

    const { mutateAsync: SignOutFn, isPending: isSigningOut } = useMutation({
        mutationFn: SignOut,
        onSuccess: () => {
            navigate("/sign-in", { replace: true })
        }
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} className="flex items-center gap-2 select-none">
                        {isLoadingManagedRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) : managedRestaurant?.name}
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        <Fragment>
                            <span>
                                {isLoadingProfile ? (
                                    <div className="space-y-1.5">
                                        <Skeleton className="h-4 w-32" />
                                        <Skeleton className="h-3 w-24" />
                                    </div>
                                ) : profile?.name}
                            </span>
                            <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                        </Fragment>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="mr-2 h-4 w-4" />
                            <span>Perfil da Loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400" disabled={isSigningOut}>
                        <button onClick={() => { SignOutFn() }}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Sair</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>


            <StoreProfileDialog />
        </Dialog>
    )
}