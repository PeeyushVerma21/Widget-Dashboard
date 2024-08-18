
import React from "react";
import { Card, CardContent, Box, Grid, Typography, Button, DialogContent, DialogActions, Dialog } from "@mui/material";
import { dashboardDataAtom } from "../../atom/payload";
import { useAtom } from "jotai";
import AddIcon from '@mui/icons-material/Add';



interface CardData {
  id: number;
  title: string;
  items: string;
}

interface DashboardCardProps {
  title: string;
  cards: CardData[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, cards }) => {

  const [open, setOpen] = React.useState(false);
  const [CardTitle, setCardTitle] = React.useState("");
  const [CardItems, setCardItems] = React.useState("");
  const [data, setdata] = useAtom(dashboardDataAtom);

  const saveCardOnly = (titlee: any) => {
    if (titlee !== "") {
      const existingCategory = data.find(category => category.title === titlee);
      if (existingCategory) {
        existingCategory.cards.push({
          id: existingCategory.cards.length + 1,
          title: CardTitle,
          items: CardItems,
        });
        setdata([...data]);
      } else {
        alert("Category not found. Please add the category first.");
      }
    }
  };
  const  handleClose = () => {
    setOpen(false);
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              sx={{
                minHeight: "170px",
              }}
            >
              <CardContent>
                <Box textAlign="left">
                  <Typography variant="subtitle1">{card.title}</Typography>
                  </Box>
                  <Box sx={{ justifyContent: "center", display: "flex", alignItems : 'center', mt: "9%" }}>
                    <Typography variant="subtitle1">{card.items}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: "170px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CardContent>
              <Button variant="contained" color="primary" onClick={()=> {setOpen(true)}}>
                Add Card
                </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "100%",
            maxHeight: "100%",
            width: "50%",
            position: "fixed",
            right: 0,
            margin: 0,
          },
        }}
      >
        <DialogContent>
  
          <Typography variant="h6">
            Add New Widget Category
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input
              type="text"
              placeholder="Card Title"
              value={CardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Card Items"
              value={CardItems}
              onChange={(e) => setCardItems(e.target.value)}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  height: "30px",
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "lightgray",
                  },
                }}
                endIcon={<AddIcon />}
                onClick={()=>{saveCardOnly(title)}}
              >
                Add Widget
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>  
        </Dialog>
    </Box>
  );
};

export default DashboardCard;