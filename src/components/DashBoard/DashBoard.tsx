import React from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DashboardCard from "../Cards/Cards";
import { dashboardDataAtom } from "../../atom/payload";
import { useAtom } from "jotai";

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [CategoryTitle, setCategoryTitle] = React.useState("");
  const [CardTitle, setCardTitle] = React.useState("");
  const [CardItems, setCardItems] = React.useState("");
  const [isAddingCategory, setIsAddingCategory] = React.useState(false);
  const [data, setdata] = useAtom(dashboardDataAtom);

  const saveCategoryWithCard = () => {
    const newCategory = {
      title: CategoryTitle,
      cards: [
        {
          id: data.length + 1,
          title: CardTitle,
          items: CardItems,
        },
      ],
    };
    setdata([...data, newCategory]);
  };

  const saveCardOnly = () => {
    if (CategoryTitle !== "") {
      const existingCategory = data.find(category => category.title === CategoryTitle);
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

  const handleClickOpen = (addingCategory : any) => {
    setOpen(true);
    setIsAddingCategory(addingCategory);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryTitle("");
    setCardTitle("");
    setCardItems("");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        fontSize: "3rem",
        margin: "0",
        pt: 5,
        pl: 10,
        pr: 10,
        pb: 5,
      }}
    >
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
            {isAddingCategory ? "Add New Widget Category" : "Add Card to Existing Category"}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input
              type="text"
              placeholder={isAddingCategory ? "Category Title" : "Existing Category Title"}
              value={CategoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
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
                onClick={saveCategoryWithCard}
              >
                Add Category with Card
              </Button>
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
                onClick={saveCardOnly}
              >
                Add Card Only
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>  
        </Dialog>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 4 }}
      >
        <Typography variant="h6">Dashboard</Typography>
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
          onClick={() => handleClickOpen(true)}
        >
          Add Category
        </Button>
      </Box>
      <Box>
        {data.map((section: any, index: any) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {section.title}
            </Typography>
            <DashboardCard title={section.title} cards={section.cards} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
