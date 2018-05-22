namespace ZooSpace.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System.ComponentModel.DataAnnotations;

    public class User : IdentityUser
    {
        [Required]
        [MinLength(4)]
        [MaxLength(40)]
        public string FullName { get; set; }

        public string LocationLongitude { get; set; }
                
        public string LocationLatitude { get; set; }

        public byte[] Image { get; set; }
    }
}
