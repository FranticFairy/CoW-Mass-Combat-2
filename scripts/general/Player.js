var PLAYER =
{
    // static information about players
    // making it easy editable\modable for everyone :)

    getDefaultPlayerColors : function()
    {
        return 21;
    },
    getDefaultColor : function(index)
    {
        var color = "#000000";
        switch (index)
        {
            case 0: // os
                color = "#CD0000";
                break;
            case 1: // bm
                color = "#1545CD";
                break;
            case 2: // ge
                color = "#0D9500";
                break;
            case 3: // yc
                color = "#958D00";
                break;
            case 4: // bh
                color = "#45007D";
                break;
            case 5: // bg
                color = "#28311D";
                break;
            case 6: // ma
                color = "#6D6D6D";
                break;
            case 7: // ac
                color = "#FC3434";
                break;
            case 8: // bd
                color = "#58A8F0";
                break;
            case 9: // gs
                color = "#80945C";
                break;                
            case 10: // pf
                color = "#FCD400";
                break;                
            case 11: // ti
                color = "#A888E0";
                break;                
            case 12: // dm
                color = "#7A7249";
                break;
            case 13:
                color = "#525052";
                break;
            case 14:
                color = "#DC8490";
                break;
            case 15:
                color = "#004D35";
                break;
            case 16:
                color = "#78A488";
                break;
            case 17:
                color = "#7C542C";
                break;
            case 18:
                color = "#B50568";
                break;
            case 19:
                color = "#0BAAAA";
                break;
            case 20:
                color = "#CD4500";
                break;
            default:
                // create a cool random color
                var red = globals.randInt(0, 255);
                if (red < 16)
                {
                    red = 16;
                }
                var green = globals.randInt(0, 255);
                if (green < 16)
                {
                    green = 16;
                }
                var blue = globals.randInt(0, 255);
                if (blue < 16)
                {
                    blue = 16;
                }
                color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
                break;
        }
        return color;
    },

    getColorTable : function(index)
    {
        var table = "fai_" + index;

        if(index > -1) {
            return table;
        }
        return "";
    },

    getColorForTable(index)
    {
        switch (index)
        {
            case 0:
                return 40;
            case 1:
                return 70;
            case 2:
                return 100;
            case 3:
                return 130;
            case 4:
                return 160;
            case 5:
                return 190;
            case 6:
                return 55;
            case 7:
                return 90;
            case 8:
                return 140;
            case 9:
                return 170;
            case 10:
                return 10;
            case 11:
                return 15;
            case 12:
                return 20;
            case 13:
                return 25;
            case 14:
                return 35;
            case 15:
                return 40;
            case 16:
                return 45;
            case 17:
                return 50;
            case 18:
                return 60;
            case 19:
                return 65;
            case 20:
                return 70;
            case 21:
                return 75;
            case 22:
                return 85
            case 23:
                return 90;
            case 24:
                return 95;
            case 25:
                return 100;
            case 26:
                return 130;
            case 27:
                return 135;
            case 28:
                return 140;
            case 29:
                return 155;
            case 30:
                return 160;
            case 31:
                return 165;
            case 32:
                return 170;
            case 33:
                return 175;
            case 34:
                return 180;
        }
        return 100;
    },

    getColorTableCount : function()
    {
        // amount of different colors in the table (minus transparent)
        return 35;
    },

    // return the default set for colors
    loadDefaultPlayerColor : function (player)
    {
        var color = PLAYER.getDefaultColor(player.getPlayerID());
        player.setColor(color);
    },

    getDefaultArmy : function (player)
    {
        var id = player.getPlayerID() % 13;
        var armies = PLAYER.getArmies();
        return armies[id];
    },

    getArmyName : function (army)
    {
        switch (army)
        {
            case "OS":
                return tr("Allied Nations");
            case "BM":
                return tr("Parlin Republic");
            case "GE":
                return tr("Tenaris Empire");
            case "YC":
                return tr("Wolves' Pact");
            case "BH":
                return tr("Revolutionary Army");
            case "BG":
                return tr("Sol Confederacy");
            case "ML":
                return tr("Steel League");
            case "AC":
                return tr("Alfieq's Army");
            case "BT":
                return tr("Independent States");
            case "DM":
                return tr("Legion Cult");
            case "GS":
                return tr("Advance Wars COs");
            case "PF":
                return tr("Commander Wars COs");
            case "TI":
                return tr("Custom COs");
        }
    },

    // co selection infos
    getArmies : function()
    {
        return ["OS",
                "BM",
                "GE",
                "YC",
                "BH",
                "BG",
                "MA",
                "AC",
                "BD",
                "DM",
                "GS",
                "PF",
                "TI"];
    },

    getArmyCOsOS : function()
    {
        return ["CO_EMPTY_OS", "CO_RANDOM"];
    },

    getArmyCOsBM : function()
    {
        return ["CO_EMPTY_BM", "CO_RANDOM"];
    },

    getArmyCOsGE : function()
    {
        return ["CO_EMPTY_GE", "CO_RANDOM"];
    },

    getArmyCOsYC : function()
    {
        return ["CO_EMPTY_YC", "CO_RANDOM"];
    },

    getArmyCOsBH : function()
    {
        return ["CO_EMPTY_BH", "CO_RANDOM"];
    },

    getArmyCOsBG : function()
    {
        return ["CO_EMPTY_BG", "CO_RANDOM"];
    },

    getArmyCOsMA : function()
    {
        return ["CO_EMPTY_MA", "CO_RANDOM"];
    },

    getArmyCOsAC : function()
    {
        return ["CO_EMPTY_AC", "CO_RANDOM"];
    },

    getArmyCOsBD : function()
    {
        return ["CO_EMPTY_BD", "CO_RANDOM"];
    },

    getArmyCOsGS : function()
    {
        return ["CO_EMPTY_GS", "CO_RANDOM"];
    },

    getArmyCOsPF : function()
    {
        return ["CO_EMPTY_PF", "CO_RANDOM"];
    },

    getArmyCOsTI : function()
    {
        return ["CO_EMPTY_TI", "CO_RANDOM"];
    },

    getArmyCOsDM : function()
    {
        return ["CO_EMPTY_DM", "CO_RANDOM"];
    },
}
