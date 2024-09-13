import React from 'react';
import BoxComponent from './Box';
import ListComponent from './List';
export default function Navbar() {
    const items = [
        { label: "خصوصی فیچر",  },
        { label: "زیرو پوائنٹ",  },
        { label: "دلچسپ و عجیب",  },
        { label:"سائنس اور ٹیکنالوجی",  },
        { label: "صحت",  },
        { label: "بزنس",  },
        { label: "شوبز",  },
        { label: "کھیل",  },
        { label: "انٹرنیشنل",  },
        { label: "پاکستان",  },
        { label: "تازہ ترین",  },
        { label: "صفحۂ اول",  },
        
      ];
  return (
    <BoxComponent
    sx={{
        backgroundColor:'var(--primary)',
        color:'var(--light)',
        padding:'2px 80px 2px 150px'
    }}
    >
       <ListComponent
        sx={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          fontSize:'20px',
          fontWeight:'400',
        }}
              items={items.map((item) => (
                <li key={item.label}>
                    {item.label}
                </li>
              ))}
            />
    </BoxComponent>
  );
}
