export const sectionsChildSchema = {
    Members: {
      sectionChildName: {
        required: true,
        visible: true,
        label: "Name"
      },
      sectionChildShortDesc: {
        required: true,
        visible: true,
        label: "Position"
      },
      sectionChildDesc: {
        required: true,
        visible: true,
        label: "About"
      },
      sectionChildLinks: {
        required: false,
        visible: true,
        label: "Social Media {format:[text](link)}"
      }
    },
    Events: {
        sectionChildName: {
          required: true,
          visible: true,
          label: "Name"
        },
        sectionChildShortDesc: {
          required: true,
          visible: true,
          label: "Date and Time"
        },
        sectionChildDesc: {
          required: true,
          visible: true,
          label: "Event Details"
        },
        sectionChildLinks: {
          required: false,
          visible: true,
          label: "Links {format:[text](link)}"
        }
    },
    Projects: {
        sectionChildName: {
          required: true,
          visible: true,
          label: "Name"
        },
        sectionChildShortDesc: {
          required: true,
          visible: true,
          label: "Project Contibutors"
        },
        sectionChildDesc: {
          required: true,
          visible: true,
          label: "Project Details"
        },
        sectionChildLinks: {
            required: false,
            visible: true,
            label: "Links {format:[text](link)}"
        }
    }
};
