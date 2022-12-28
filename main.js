
const passengers = [
    {
      id: 1,
      rollno:1097,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      rollno:1762,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      rollno:102,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 4,
      rollno:1032,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  var a=[],b,d,e=[];
    for(i=0;i<passengers.length;i++){
       a[i]=passengers[i].connectedFlights;
       
    }
 
    for(i=0;i<a.length;i++){
      b=Math.max(...a)
      a[a.indexOf(b)]=null;
      for(j=0;j<passengers.length;j++){
        if(b==passengers[j].connectedFlights){
          console.log(passengers[j]);
        }
      }
     
    }
  
 