import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/hooks/use-geolocation";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const Dashboard = () => {
  const { coordinates, error:locationError, getLocation, isLoading:locationLoading } = useGeoLocation();

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
    }
  };

  if (locationLoading){
    return <WeatherSkeleton />
  }

  if (locationError){
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="h-4 w-4 mr-2" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
