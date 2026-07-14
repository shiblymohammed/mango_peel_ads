import TeamCard from "@/components/team/TeamCard";

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Team</h1>
            
            {/* Testing with the new design structure */}
            <TeamCard 
                themeColor="#FFB800"
                imageSrc="/assets/team/Ajuraj_Art_Director.png"
                name="Ajuraj"
                role="Art Director"
                skills="Design • Creative • Branding"
            />
        </main>
    );
}